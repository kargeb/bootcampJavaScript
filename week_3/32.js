var button = document.querySelector("#button");


function Toggler(tag){
    this.tag = document.querySelector(tag);
}

Toggler.prototype.getElem = function(){
    return this.tag
}

Toggler.prototype.show = function(){
    this.tag.style.display = "";
}

Toggler.prototype.hide = function(){
    this.tag.style.display = "none";
}



var elem = new Toggler("#section");


button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);
