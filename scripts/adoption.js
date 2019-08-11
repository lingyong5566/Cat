var app = angular.module('myApp', []);
app.controller('catCtrl', function ($scope, $http) {
    $scope.formObj = {};
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
        doAJAX("read" , JSON.stringify($scope.formObj ) , "Cat", catInfoCallback);
    }

    var catInfoCallback = function(arr){
        console.log("catsCallback : " , arr);
        $scope.catName = arr;
        $scope.$apply();

    }
    init();

});