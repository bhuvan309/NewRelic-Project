var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http){
$scope.fname='bhuvan';
$scope.lname ='sharma';
    $scope.fullname = function(){
        return $scope.fname+" "+$scope.lname;
    };
    $scope.users = [{ fname:'bhuvan',lname:'sharma'},{fname:'Hema',lname:'Kandpal'} ];
    $scope.topic = [{name:'dogs',desc:'Dogs are bad'},{name:'cats',desc:'Cats are mad'},{name:'butterfly',desc:'Butterflies are beautiful'}];
    $http.get("welcome.htm").then(function(response){

        $scope.myUrl = response.data;
    });

});

app.directive("w3TestDirective", function(){
    return {
        template :"<div ng-switch='myVar'> <div ng-switch-when='dogs'>{{topic[0].desc}}</div><div ng-switch-when='cats'>{{topic[1].desc}}</div><div ng-switch-when='butterfly'>{{topic[2].desc}}</div><div ng-switch-default>Select topic from the dropdown, to switch the content of this DIV.</div></div>"        
        
    };
    
});