"use strict";
//create new user with register
app.factory("AuthFactory", function($q, $window){

    let currentUser = null;

    let getUser = () => {
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
            console.log("logout user");
        });
    };


    let isAuth = function (){
        return $q((resolve, reject) =>{
            firebase.auth().onAuthStateChanged((user) => {
                if (user){
                    //pass entire object to get uid and email
                    currentUser= user;
                    resolve(true);
                }else {
                    resolve(false);
                }
            });
        });
    };

    return{createUser, loginUser, logoutUser, isAuth, currentUser, getUser};
});
