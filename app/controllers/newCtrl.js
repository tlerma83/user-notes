"use strict";

app.controller("NewNoteCtrl", function($scope, $q, $http, $window, $location, AuthFactory, DataFactory){

        let user = AuthFactory.getUser();
        let date = Date();
        console.log(data);

        $scope.btnText = "submit";
        $scope.newNote = {
            note: "",
            time: date,
            uid: user
        };

        $scope.addNewNote = function() {
            DataFactory.postedNewNote($scope.newNote)
            .then (function(response){
                $window.location.url("noteList")
            });
        };




});
