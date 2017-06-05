"use strict";

app.factory("DataFactory", function($q, $http, FBCreds){

    let postedNewNote = (newNote) => {
        return $q((resolve, reject) =>{
           $http.post(`${FBCreds.databaseURL}/notes.json`, newNote)

            .then((ObjFromFire) =>{
                resolve(ObjFromFire);

            })
            .catch((error) =>{
                reject(error);
            });
        });
    };

    let getNotes = (user) => {
        let notes = [];
        return $q((resolve, reject)=>{
            $http.get(`${FBCreds.databaseURL}/notes.json`);
        });
    };





    return {postedNewNote, getNotes};

});
