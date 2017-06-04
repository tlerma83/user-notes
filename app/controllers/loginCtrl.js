"use strict";

app.controller("LoginCtrl", function($scope, AuthFactory, $window, $location){

    $scope.account = {
        email: "",
        password: ""
    };

    $scope.logout = () => {
        console.log("user is logging out");
        AuthFactory.logoutUser()
        .then(function(data){
            $window.location.url= "/";
        });
    };


    $scope.login = () => {
        console.log("User clicked login");
        AuthFactory.loginUser($scope.account)
        .then ((response)=>{
         $window.location.href="#!/login/newNotes";
        });
    };

});

