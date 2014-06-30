'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var module = angular.module('myApp.services', []);

module.service('ProjectsService', function() {
	var projectlist = [ {
        "id": 1,
        "description": "Productidentifier",
        "name": "Assignment",
        "coordinators":['saurav','priyanka']
    },
    {
        "description": "Nameofthepject",
        "id": 2,
        "name": "Assignment1",
       "coordinators":['saurav','kousick']   
    },
    {
        "description": "NameoftheHu",
        "id": 3,
        "name": "Assignment2",
     	"coordinators":["kousick","priyanka"]
    },
    {
        "description": "NameoftheAssng",
        "id": 4,
        "name": "Assignment3",
     	"coordinators":['saurav','priyanka','kousick',]
    }];

	// simply returns the contacts list
	this.list = function() {
		return projectlist;
	};
	this.save = function(projectlist) {
//		if (project.id == null) {
			// if this is new project, add it in projects array
		projectlist.id = ++projectlist.length;
			projects.push(projectlist);
//		} else {
//			// for existing project, find this project using id
//			// and update it.
//			for (i in projects) {
//				if (projects[i].id == project.id) {
//					projects[i] = project;
//				}
//			}
//		}
	};
});