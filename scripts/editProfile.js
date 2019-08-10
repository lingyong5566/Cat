var app = angular.module('myApp', []);
app.controller('catCtrl', function ($scope, $http) {
    $scope.formObj = {};
    $scope.editUserProfile = function (){
        doAJAX("update" , JSON.stringify($scope.formObj ) , "User", callbackUpdate);
    }

    var init = function (){
        getProfileInformation();
    }

    var getProfileInformation = function(){
        var username = localStorage.getItem("username");
        console.log("Getting : " , username);
        doAJAX("read" , JSON.stringify({ username : username}) , "User", callback);
    }

    $scope.reset = function (){
        $scope.formObj = {};
    }
    

    var callback = function (arr){
        console.log("Results returned : " , arr);
        $scope.formObj = arr[0];
        console.log("TCL: callback -> $scope.formObj", $scope.formObj);
        $scope.$apply();
    }

    var callbackUpdate = function (arr){
        alert("Successfully updated.");
        // window.location.assign("customer.html");
    }

    init();
});