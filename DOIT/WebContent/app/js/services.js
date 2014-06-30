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
        "coordinators":['saurav','priyanka'],
        "status_task":[
                       {"description": "Productidentifier",
                    	  "status":"/img/complete.png",
                    	  "priority": "Showstopper",
                    	  "assign_to":"saurav",
                    	  "des":"sdsadcadsdsadsa","due_date":"20/5/2014",
                          "created_date":"20/5/2014"},
                          {"description": "Productidentifier",
                        	  "status":"/img/pending.jpg",
                        	  "priority": "High",
                        	  "des":"vdjajdsajhsjssajcvshacvcbsajbcascbdsa",
                        	  "due_date":"20/5/2014",
                              "created_date":"20/5/2014","assign_to":"saurav"}],
                     
                      "assigned_to":[{"name":"priyanka","role":"Developer","img_url":"/img/priyanka.jpg"},
                                      {"name":"saurav","role":"Developer","img_url":"/img/boy.jpg"}],
    },
    {
        "description": "Nameofthepject",
        "id": 2,
        "name": "Assignment1",
       "coordinators":['saurav','kousick'],
       "status_task":[
                      {"description": "Nameoftheprject",
                	  "status":"/img/pending.jpg", 
                	  "due_date":"20/5/2014",
                      "created_date":"20/5/2014",
                      "priority": "Showstopper",
                      "des":"sdsadsadcnskcnsakcnsakcsaakc",
                      "assign_to":"saurav"},
                      
                      
                      {"status":"/img/complete.png",
                    	  "priority": "Medium",
                    	  "des":"streteFBskncsakacnSJXSXdsadsa", 
                    	  "due_date":"20/5/2014",
                          "created_date":"20/5/2014",
                          "description": "Nameofthepject","assign_to":"kosick"}],
                           "assigned_to":[{"name":"kousick","role":"Developer","img_url":"/img/boy.jpg"},
                                          {"name":"saurav","role":"Developer","img_url":"/img/boy.jpg"}] ,
                
    },
    {
        "description": "NameoftheHu",
        "id": 3,
        "name": "Assignment2",
     	"coordinators":["kousick","priyanka"],
     	"status_task":[{"description": "NameoftheHU",
      	  "status":"/img/complete.png",
      	  "priority": "Medium",
      	  "assign_to":"priyanka",
      	  "des":"sdsadsadckncksncskansaakcnsaaksdsadsa",
      	  "due_date":"20/5/2014",
            "created_date":"20/5/2014"},
            {"description": "NameoftheHU",
          	  "status":"/img/pending.jpg",
          	  "des":"vcsjbxsajbxjsabxjsxbxsjxsjxbsjbxsdsadsa",
          	  "due_date":"20/5/2014",
                "created_date":"20/5/2014",
                "assign_to":"kosick",
                "priority": "High"}],
     	"assigned_to":[{"name":"kousick","role":"Developer","img_url":"/img/boy.jpg"},{"name":"priyanka","role":"Developer","img_url":"/img/priyanka.jpg"}],

    
    },
    {
        "description": "NameoftheAssng",
        "id": 4,
        "name": "Assignment3",
     	"coordinators":['saurav','priyanka','kousick',],
     	"status_task":[
                       {"description": "NameoftheAssng",
                	  "status":"/img/pending.jpg",
                	  "priority": "Showstopper",
                	  "des":"sdsadncskcnskcsakcnascksacnsaksadsdsadsa",
                	  "due_date":"20/5/2014",
                      "created_date":"20/5/2014",
                      "assign_to":"priyanka"},
                      {"description": "NameofAssn",
                    	  "status":"/img/pending.jpg",
                    	  "des":"sajcbsajcbsajcbsajsajcbsaajcbsawesadsa",
                    	  "due_date":"20/5/2014",
                          "created_date":"20/5/2014",
                          "assign_to":"kosick",
                          "priority": "Medium"}],
               	"assigned_to":[{"name":"kousick","role":"Developer","img_url":"/img/boy.jpg"},{"name":"priyanka","role":"Developer","img_url":"/img/priyanka.jpg"},{"name":"saurav","role":"Developer","img_url":"/img/boy.jpg"}],
               	"due_date":"20/5/2014",
                
              
              }
    ];

	// simply returns the contacts list
	this.list = function() {
		return projectlist;
	};
	this.save = function(project) {
//		if (project.id == null) {
			// if this is new project, add it in projects array
		
		projectlist.push(project);
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
	this.save_data = function(project1) {
//		if (project.id == null) {
			// if this is new project, add it in projects array
		
		projectlist.status_task.push(project1);
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