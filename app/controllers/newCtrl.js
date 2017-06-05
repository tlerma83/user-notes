"use strict";

app.controller("NewNoteCtrl", function($scope, $q, $http, $window, $location, AuthFactory, DataFactory){
        //ger user returns an obj with uid and email
        let user = AuthFactory.getUser();

        $scope.btnText = "submit";
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
            console.log("what did my new Note bring back?", $scope.newNote);
            DataFactory.postedNewNote($scope.newNote)

            .then (function(response){
                $window.location.href= "#!/login/newNotes";
            });
        };




});
