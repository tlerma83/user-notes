"use strict";

app.controller("NewNoteCtrl", function($scope, $window, $location, AuthFactory, DataFactory){

    let user = AuthFactory.getUser();

    $scope.newNote = {
        note: "",
        time: Date(),
        uid: user.uid,
        email: user.email
    };


    if (!AuthFactory.isAuth()) {
        $location.path("/");
    }

    $scope.addNewNote = function() {
        DataFactory.postedNewNote($scope.newNote)

        .then (function(response){
            $scope.newNote.note = "";
        });
    };
});
