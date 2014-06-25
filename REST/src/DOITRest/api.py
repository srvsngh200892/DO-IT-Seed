from tastypie.resources import ModelResource, Resource
from tastypie.authorization import Authorization
from DOITRest.models import Contributor, Project, Task, Comment
from tastypie.utils.mime import determine_format
from tastypie import fields, http

from tastypie.serializers import Serializer

import re
import json
from tastypie.constants import ALL
from django.http import HttpResponse
from tastypie.exceptions import ImmediateHttpResponse

class CamelCaseJSONSerializer(Serializer):
    formats = ['json']
    content_types = {
        'json': 'application/json',
    }

    def to_json(self, data, options=None):
        # Changes underscore_separated names to camelCase names to go from python convention to javacsript convention
        data = self.to_simple(data, options)

        def underscoreToCamel(match):
            return match.group()[0] + match.group()[2].upper()

        def camelize(data):
            if isinstance(data, dict):
                new_dict = {}
                for key, value in data.items():
                    new_key = re.sub(r"[a-z]_[a-z]", underscoreToCamel, key)
                    new_dict[new_key] = camelize(value)
                return new_dict
            if isinstance(data, (list, tuple)):
                for i in range(len(data)):
                    data[i] = camelize(data[i])
                return data
            return data

        camelized_data = camelize(data)

        return json.dumps(camelized_data, sort_keys=True)

    def from_json(self, content):
        # Changes camelCase names to underscore_separated names to go from javascript convention to python convention
        data = json.loads(content)

        def camelToUnderscore(match):
            return match.group()[0] + "_" + match.group()[1].lower()

        def underscorize(data):
            if isinstance(data, dict):
                new_dict = {}
                for key, value in data.items():
                    new_key = re.sub(r"[a-z][A-Z]", camelToUnderscore, key)
                    new_dict[new_key] = underscorize(value)
                return new_dict
            if isinstance(data, (list, tuple)):
                for i in range(len(data)):
                    data[i] = underscorize(data[i])
                return data
            return data

        underscored_data = underscorize(data)

        return underscored_data

 
class BaseCorsResource(ModelResource):
    """
    Class implementing CORS support for tastypie
    """
    def create_response(self, *args, **kwargs):
        """
        Create the response for a resource. Note this will only
        be called on a GET request, or on a POST request if 
        always_return_data is True
        """
        response = super(BaseCorsResource, self).create_response(*args, **kwargs)
        response['Access-Control-Allow-Origin'] = '*'
        response['Access-Control-Allow-Headers'] = 'Content-Type'
        return response
 
    def post_list(self, request, **kwargs):
        """
        In case of POST make sure we return the Access-Control-Allow Origin
        regardless of returning data
        """
        response = super(BaseCorsResource, self).post_list(request, **kwargs)
        response['Access-Control-Allow-Origin'] = '*'
        response['Access-Control-Expose-Headers'] = 'Location'
        return response
        
    def method_check(self, request, allowed=None):
        """
        Check for an OPTIONS request. If so return the Allow- headers
        """
        if allowed is None:
            allowed = []
 
        request_method = request.method.lower()
        allows = ','.join(map(lambda s: s.upper(), allowed))
 
        if request_method == 'options':
            response = HttpResponse(allows)
            response['Access-Control-Allow-Origin'] = '*'
            response['Access-Control-Allow-Headers'] = 'Content-Type'
            response['Access-Control-Allow-Methods'] = "GET, PUT, POST, PATCH"
            response['Allow'] = allows
            raise ImmediateHttpResponse(response=response)
 
        if not request_method in allowed:
            response = http.HttpMethodNotAllowed(allows)
            response['Allow'] = allows
            raise ImmediateHttpResponse(response=response)
 
        return request_method

class BaseResource(BaseCorsResource):
    def determine_format(self, request):
        """
        return application/json as the default format
        """
        fmt = determine_format(request, self._meta.serializer,\
                               default_format=self._meta.default_format)
        if fmt == 'text/html' and 'format' not in request:
            fmt = 'application/json'
        return fmt 

class ContributorResource(BaseResource):
    projects = fields.ManyToManyField('DOITRest.api.ProjectResource', attribute='project')
    class Meta:
        resource_name = 'contributors'
        authorization = Authorization()
        queryset = Contributor.objects.all()
        serializer = CamelCaseJSONSerializer()
        collection_name = 'data'
        filtering = {
                     "projects": ALL
                     }

class ProjectResource(BaseResource):
    contributors = fields.ManyToManyField(ContributorResource, attribute='contributor', null=True, full=True)
    class Meta:
        resource_name = 'projects'
        authorization = Authorization()
        queryset = Project.objects.all()
        serializer = CamelCaseJSONSerializer()
        collection_name = 'data'


class TaskResource(BaseResource):
    assigned_to = fields.ForeignKey(ContributorResource, attribute='assigned_to', null=True, full=True)
    project = fields.ForeignKey(ProjectResource, attribute='project', null=True)
    comments = fields.OneToManyField('DOITRest.api.CommentResource', attribute='comment', null=True, full=True)
    class Meta:
        resource_name = 'tasks'
        authorization = Authorization()
        queryset = Task.objects.all()
        serializer = CamelCaseJSONSerializer()
        collection_name = 'data'
        filtering = {
                     "assigned_to": ALL,
                     "project": ALL
                     }

class CommentResource(BaseResource):
        commented_by = fields.ForeignKey(ContributorResource, attribute='commented_by', null=True, full=True)
        commented_on = fields.ForeignKey(TaskResource, attribute='commented_on', null=True)
        class Meta:
            resource_name = 'comments'
            authorization = Authorization()
            queryset = Comment.objects.all()
            serializer = CamelCaseJSONSerializer()
            collection_name = 'data'
