var app = angular.module('myApp', []);
app.controller('catCtrl', function ($scope, $http) {
    $scope.formObj = {};
    $scope.showForm = false;
    $scope.catsss = [];
    $scope.editUserProfile = function (){
    }

    var init = function (){
        getCatInformation();
    }

    var getCatInformation = function(){
        doAJAX("read" , JSON.stringify({}), "Cat", callback);
    }

    $scope.reset = function (){
        $scope.formObj = {};
    }
    

    var callback = function (arr){
        console.log("TCL: callbackUpdate -> arr", arr)
        $scope.catsss = arr;
        $scope.$apply();
    }

    $scope.reviewForm = function(cat){
        $scope.formObj = cat;
        $scope.showForm = true;
    }

    $scope.editCatProfile = function(){
        delete $scope.formObj["$$hashKey"];
        doAJAX("update" , JSON.stringify($scope.formObj ) , "Cat", callbackUpdate);
        
    }

    var callbackUpdate = function (arr){

        $scope.showForm = false;
        $scope.$apply();
        alert("Successfully updated.");
        // window.location.assign("customer.html");
    }

    init();
});