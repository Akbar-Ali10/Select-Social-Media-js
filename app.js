

var selectfield = document.getElementById("selectfield");
var selecttext = document.getElementById("selecttext");

var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowicon = document.getElementById("arrowicon");

selectfield.onclick = function(){
     list.classList.toggle("hide")
     arrowicon.classList.toggle("rotate")
}

for(options of options){
    options.onclick = function(){
        selecttext.innerHTML = this.textContent; 
        list.classList.toggle("hide")
        arrowicon.classList.toggle("rotate")

    }
}