var inputText = document.querySelector("#input-text");
var btn = document.querySelector("#btn");
var outputText = document.querySelector("#output-text");

var url = "https://api.funtranslations.com/translate/minion.json"

function urlMake(text){
    return url + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error happened", error);
    alert("something went wrong");
}

function clicked(){
    var text = inputText.value;

    fetch(urlMake(text))
    .then(response => response.json())
    .then(json => {
        var translate = json.contents.translated;
        outputText.innerText = translate
    })
    .catch(errorHandler)
}

btn.addEventListener("click", clicked);