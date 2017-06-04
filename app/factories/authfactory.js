"use strict";
//create new user with register
app.factory("AuthFactory", function($q, $window){

    //check to see if a user already
    let currentUser = null;

//    let isAUser = () => {
//        return firebase.auth().currentUser ? true: false;
//    };


    let getUser = () => {
        console.log("current user", currentUser);
        return currentUser;

    };



    //step one on authfactory....register
    let createUser = function(userObj){
        return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
        .catch(function(error){
            let errorCode = error.code;
            let errorMessage = error.messsage;
            console.log("this is an error: ", errorCode, errorMessage);
        });

    };

    //step 2 let user login
    let loginUser = (userObj) => {
        return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
        .catch(function(error){
            let errorCode = error.code;
            let errorMessage = error.messsage;
            console.log("this is an error: ", errorCode, errorMessage);
        });
    };

    //let user logout
    let logoutUser = () => {
        return firebase.auth().signOut()
        .then(function(data){
            $window.location.href = "/";
            console.log("logout user");
        });

    };

    let isAuth = function (){
//        console.log("is authinticated?");
        return $q((resolve, reject) =>{
            firebase.auth().onAuthStateChanged((user) => {
                if (user){
                    currentUser= user.uid;
                    resolve(true);
                }else {
                    resolve(false);
                    console.log("no user?");
                }
            });
        });
    };





    return{createUser, loginUser, logoutUser, isAuth, currentUser, getUser};
});
