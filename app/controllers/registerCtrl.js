"use strict";

app.controller("AuthCtrl", function($scope, $window, AuthFactory, $location){

    //creating objet to hold users info
    console.log("AuthCtrl has started");

    $scope.account = {
        email: "",
        password: ""
    };

//    if (AuthFactory.isAuth()) {
//        console.log("user is here");
////         $scope.logout();
//    }



    //create user, register
    $scope.registerUser = () => {

        //pull in email and password from authfactory function
        AuthFactory.createUser({
            email: $scope.account.email,
            password: $scope.account.password
        })
        .then((userStuff)=>{
            console.log("user register success");
            $window.location.href= "#!/login/newNotes";
        });
    };

});
