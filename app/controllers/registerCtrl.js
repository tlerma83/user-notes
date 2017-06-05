"use strict";

app.controller("AuthCtrl", function($scope, $window, AuthFactory, $location){


    $scope.registerUser = () => {
        //pull in email and password from authfactory function
        AuthFactory.createUser({
            email: $scope.account.email,
            password: $scope.account.password
        })

        .then((userStuff)=>{
            $window.location.href= "#!/login/newNotes";
        });
    };
});
