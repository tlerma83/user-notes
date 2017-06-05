"use strict";

app.controller("LoginCtrl", function($scope, AuthFactory, $window, $location){

    $scope.logout = () => {
        AuthFactory.logoutUser()
        .then(function(data){
            $location.path("/");
        });
    };

    if (AuthFactory.isAuth()) {
        $scope.logout();
    }

    $scope.login = () => {
        AuthFactory.loginUser($scope.account)

        .then ((response)=>{
            $window.location.href="#!/login/newNotes";
        });
    };
});

