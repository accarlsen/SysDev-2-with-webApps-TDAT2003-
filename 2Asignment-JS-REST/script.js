"use strict";

var goButton = document.getElementById('goButton');
var input = document.getElementById('textInput');


goButton.addEventListener("click", e =>{
    var text = input.value;

    fetch( 'http://bigdata.stud.iie.ntnu.no/sentiment/webresources/sentiment/log?api-key=Happy!!!', {
        method: 'POST',   
        body: JSON.stringify( {sentence: text} ),
        headers:{
            'Content-Type': "application/json; charset=utf-8"
        }
    }).then(res => res.json())
    .then(response => handleResponse(JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
});

function handleResponse(response){

    var responseArray = response.split("");
    for(var i = 0; i < responseArray.length; i++){
        if(responseArray[i] == "0"){
            document.getElementById("mainDiv").className = "veryBad";
            break;
        }
        else if(responseArray[i] == "1"){
            document.getElementById("mainDiv").className = "bad";
            break;
        }
        else if(responseArray[i] == "2"){
            document.getElementById("mainDiv").className = "neutral";
            break;
        }
        else if(responseArray[i] == "3"){
            document.getElementById("mainDiv").className = "happy";
            break;
        }
        else if(responseArray[i] == "4"){
            document.getElementById("mainDiv").className = "veryHappy";
            break;
        }
    }
}