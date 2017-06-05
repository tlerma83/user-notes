"use strict";

app.factory("DataFactory", function($q, $http, FBCreds, $window){

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

    let getNotes = (userId) => {
        let notes = [];
        return $q((resolve, reject)=>{
            $http.get(`${FBCreds.databaseURL}/notes.json?orderBy="uid"&equalTo="${userId}"`)
            .then((noteObj) => {
                for(let keys in noteObj.data){
                    notes.push(noteObj.data[keys]);
                }
                resolve(notes);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    return {postedNewNote, getNotes};
});
