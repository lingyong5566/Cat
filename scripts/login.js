var app = angular.module('myApp', []);
app.controller('catCtrl', function ($scope, $http) {
    $scope.formObj = {};
    $scope.login = function () {
        console.log("TCL: formObj", $scope.formObj);
        doAJAX("read" , JSON.stringify($scope.formObj) , "User", callback);
    }

    $scope.reset = function (){
        $scope.formObj = {};
    }
    

    var callback = function (arr){
        console.log("Results returned : " , arr);
        if(arr.length != 0)
        {
            alert("Successfully login.");
            localStorage.setItem("username", $scope.formObj.username);
            if(arr[0].userStatus == "user")    
                window.location.assign("customer.html"); 
            else if (arr[0].userStatus == "admin")
                //Reroute to admin page
                console.log("To admin");
            else
                window.location.assign("customer.html"); 
        }
    }

    $scope.signUp =  function (formList) {

        
    }
});