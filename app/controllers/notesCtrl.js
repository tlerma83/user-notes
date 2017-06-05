"use strict";

app.controller("UserNotes", function($scope, $window, $location, AuthFactory, DataFactory){

    //get user returns an obj with uid and email
    let user = AuthFactory.getUser();


    if (!AuthFactory.isAuth()) {
        $location.path("/");
    }

    $scope.readNotes = function() {
        DataFactory.getNotes(user.uid)

        .then (function(notesObj){
            $scope.currentNotes = notesObj;
            $window.location.href= "#!/readNotes";
        });
    };

    $scope.readNotes();
});
