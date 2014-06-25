from django.conf.urls import patterns, include, url
from tastypie.api import Api
from DOITRest.api import ContributorResource, ProjectResource, TaskResource,\
    CommentResource
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()
api = Api(api_name='api')
api.register(ContributorResource())
api.register(ProjectResource())
api.register(TaskResource())
api.register(CommentResource())

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'DOITRest.views.home', name='home'),
    # url(r'^DOITRest/', include('DOITRest.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    (r'', include(api.urls))
)
