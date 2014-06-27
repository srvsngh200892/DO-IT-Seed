'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ProjectDetails', ['$scope', function($scope) {
     $scope.projectlist = [
                           {
                               "id": 1,
                               "description": "Productidentifier",
                               "name": "Assignment",
                               "coordinators":['saurav','priyanka']
                           },
                           {
                               "description": "Nameoftheproduct",
                               "id": 2,
                               "name": "Assignment1",
                              "coordinators":['saurav','kousick']   
                           },
                           {
                               "description": "Nameoftheproduct",
                               "id": 3,
                               "name": "Assignment2",
                            	"coordinators":["kousick","priyanka"]
                           },
                           {
                               "description": "Nameoftheproduct",
                               "id": 4,
                               "name": "Assignment3",
                            	"coordinators":['saurav','priyanka','kousick',]
                           }
                       ];
     
  }])
  .controller('ProjectList', ['$scope', '$routeParams', 
                              function($scope, $routeParams)  {
    $scope.message = "Hello This message is from View 2";
    
    $scope.projectlist1 = [
                          {
                              "id": 1,
                              "status_task":[{"status":"pending","assign_to":"saurav","des":"sdsadcadsdsadsa","due_date":"20/5/2014",
                                  "created_date":"20/5/2014"},{"status":"complete","des":"vdjajdsajhsjssajcvshacvcbsajbcascbdsa","due_date":"20/5/2014",
                                      "created_date":"20/5/2014","assign_to":"saurav"}],
                             
                              "coordinators":[{"name":"priyanka","role":"dev"},{"name":"saurav","role":"dev"}],
                             
                               
                          },
                          {
                              
                              "id": 2,
                              "status_task":[{"status":"complete", "due_date":"20/5/2014",
                                  "created_date":"20/5/2014","des":"sdsadsadcnskcnsakcnsakcsaakc","assign_to":"saurav"},{"status":"pending","des":"streteFBskncsakacnSJXSXdsadsa", "due_date":"20/5/2014",
                                      "created_date":"20/5/2014","assign_to":"kosick"}],
                             "coordinators":[{"name":"kousick","role":"dev"},{"name":"saurav","role":"dev"}] ,
                            
                             
                          },
                          {
                              
                              "id": 3,
                              "status_task":[{"status":"pending","assign_to":"priyanka","des":"sdsadsadckncksncskansaakcnsaaksdsadsa","due_date":"20/5/2014",
                                  "created_date":"20/5/2014"},{"status":"pending","des":"vcsjbxsajbxjsabxjsxbxsjxsjxbsjbxsdsadsa","due_date":"20/5/2014",
                                      "created_date":"20/5/2014","assign_to":"kosick"}],
                           	"coordinators":[{"name":"kousick","role":"dev"},{"name":"priyanka","role":"dev"}],
                           	
                          },
                          {
                              
                              "id": 4,
                              "status_task":[{"status":"pending","des":"sdsadncskcnskcsakcnascksacnsaksadsdsadsa","due_date":"20/5/2014",
                                  "created_date":"20/5/2014","assign_to":"priyanka"},{"status":"pending","des":"sajcbsajcbsajcbsajsajcbsaajcbsawesadsa","due_date":"20/5/2014",
                                      "created_date":"20/5/2014","assign_to":"kosick"}],
                           	"coordinators":[{"name":"kousick","role":"dev"},{"name":"priyanka","role":"dev"},{"name":"saurav","role":"dev"}],
                           	"due_date":"20/5/2014",
                            
                          
                          }
                      ];
    for(var i = 0; i <  $scope.projectlist1.length; i++) {
        if($routeParams.id ==  $scope.projectlist1[i].id)
        	{
        $scope.projectdetails= $scope.projectlist1[i];
        
        
        	}
    }
      
    }]);



