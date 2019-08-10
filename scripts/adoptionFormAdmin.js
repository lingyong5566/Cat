var app = angular.module('myApp', []);
app.controller('catCtrl', function ($scope, $http) {
    $scope.formObj = {};
    $scope.showForm = false;
    $scope.sendForm = function (){
        doAJAX("create" , JSON.stringify($scope.formObj ) , "AdoptionForm", callback);
    }

    $scope.reset = function (){
        $scope.formObj = {};
    }
    

    var callback = function (arr){
        alert("Successfully sent.");
        // window.location.assign("customer.html");
    }

    var init = function(){
        grabCatInfo();
    }

    var grabCatInfo = function(){
        doAJAX("read" , JSON.stringify($scope.formObj ) , "AdoptionForm", catInfoCallback);
        doAJAX("read" , JSON.stringify($scope.formObj ) , "Cat", realCatInfoCallback);
    }

    var catInfoCallback = function(arr){
        console.log("catsCallback : " , arr);
        $scope.catName = arr;
        $scope.$apply();

    }

    var realCatInfoCallback = function(arr){
        console.log("catsCallback : " , arr);
        $scope.realCatName = arr;
        $scope.$apply();

    }

    $scope.reviewForm = function(cat){
        $scope.formObj = cat;
        $scope.showForm = true;
    }
    init();

    $scope.goBack = function(){
        $scope.showForm = false;
    }

});