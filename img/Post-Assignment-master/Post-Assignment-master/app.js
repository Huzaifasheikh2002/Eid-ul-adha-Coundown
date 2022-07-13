var inputpost = document.getElementById("inputpost");
var inputDescription = document.getElementById("inputDescription");
var main = document.getElementById("main");
var arrPost = [];
var arrDescription = [];

function likefun() {
    alert("Liked");
}

function postFunction() {
    if (inputpost.value == "") {
        alert("Input should not be Empty")
    }
    else {
        arrPost.unshift(inputpost.value);
        arrDescription.unshift(inputDescription.value);
        main.innerHTML = "";
        for (var i = 0; i < arrPost.length; i++) {
            main.innerHTML += `
            <div id="divInsideMain">
            <h2>${arrPost[i]}</h2>
            <p>${arrDescription[i]}</p>
            <button class="likebtn" onclick="likefun()">like</button>
            <div/>
            
            ` ;
        }
        
        inputpost.value = "";
        inputDescription.value = "";
        return false;
    }

}

