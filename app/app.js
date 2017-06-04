"use strict";

var app = angular.module("AuthenticationApp", ["ngRoute"]);

//step 2 on app
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
    })
    .when("/register", {
        templateUrl: "partials/registration.html",
        controller: "AuthCtrl"
    })
    .when("/login/newNotes", {
        templateUrl: "partials/newNote.html",
        controller: "NewNoteCtrl"
    })
    .otherwise("/");
});

//step 1 on app
app.run(($location, FBCreds) =>{
    let creds = FBCreds;
    let authCred = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authCred);
});
