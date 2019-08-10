var app = angular.module('myApp', []);
app.controller('catCtrl', function ($scope, $http) {
    $scope.formObj = {};
    $scope.sendForm = function (){
        doAJAX("create" , JSON.stringify($scope.formObj ) , "Cat", callback);
    }

    $scope.reset = function (){
        $scope.formObj = {};
    }
    

    var callback = function (arr){
        alert("Successfully sent.");
        // window.location.assign("customer.html");
    }

});