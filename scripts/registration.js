var app = angular.module('myApp', []);
app.controller('catCtrl', function ($scope, $http) {
    $scope.formObj = {};
    $scope.register = function () {
        $scope.formObj.userStatus = "user";
        console.log("TCL: formObj", $scope.formObj);
        doAJAX("create" , JSON.stringify($scope.formObj) , "User", callback);
        
        
        
    }

    $scope.reset = function (){
        $scope.formObj = {};
    }
    

    var callback = function (arr){
        console.log("Results returned : " , arr);
        alert("Successfully registered.");
        window.location.assign("login.html");
    }

    $scope.signUp =  function (formList) {

        
    }
});