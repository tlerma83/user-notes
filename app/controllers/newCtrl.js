"use strict";

app.controller("NewNoteCtrl", function($scope, $q, $http, $window, $location, AuthFactory, DataFactory){

        let user = AuthFactory.getUser();
        let date = Date();

        $scope.btnText = "submit";
        $scope.newNote = {
            note: "",
            time: date,
            uid: user
        };

        $scope.addNewNote = function() {
            console.log("what did my new Note bring back?", $scope.newNote);
            DataFactory.postedNewNote($scope.newNote)

            .then (function(response){
                $window.location.url("/login/newNotes");
            });
        };




});
