
var element;
element = document.getElementById("header").innerText;
console.log(element);

element = document.getElementById("content").innerText;
console.log(element);

element = document.getElementById("sidebar").innerHTML;
console.log(element);

element = document.getElementById("header").getAttribute("class");
console.log(element);

element = document.getElementById("header").getAttribute("style");
console.log(element);

element = document.getElementById("header").getAttribute("onClick");
console.log(element);

element = document.getElementById("header").getAttributeNode("onClick");
console.log(element);

element = document.getElementById("header").attributes;
console.log(element);

element = document.getElementById("header").attributes[1];
console.log(element);

element = document.getElementById("header").attributes[2].value;
console.log(element);

element = document.getElementById("header").attributes[1].name;
console.log(element);



element = document.getElementById("header").innerHTML;
console.log(element);

document.getElementById("header").innerHTML = "<h1>wao</h1>";

element = document.getElementById("header").innerHTML;
console.log(element);

document.getElementById("header").setAttribute("class", "xyz");
element = document.getElementById("header").getAttribute("class");
console.log(element);

document.getElementById("header").setAttribute("style", "border: 10px doted yellow;");
element = document.getElementById("header").getAttribute("style");
console.log(element);

document.getElementById("header").attributes[1].value = "xyz";

element = document.getElementById("header").getAttribute("class");
console.log(element);

document.getElementById("header").removeAttribute("style");
document.getElementById("header").removeAttribute("class");
element = document.getElementById("header").getAttribute("style");
console.log(element);




var element;
document.querySelector("#header").innerHTML = "<h1>wow</h1>";
element = document.querySelector("#header").getAttribute("class");
console.log(element);

element = document.querySelector(".list");
element = document.getElementsByClassName("list");
console.log(element);

element = document.querySelectorAll(".list");
console.log(element);

element = document.querySelectorAll("ul")[1].innerHTML;
console.log(element);

element = document.querySelectorAll("#header h1");
element = document.querySelectorAll("#header h1")[1].innerHTML;
console.log(element);




var element;
element = document.querySelector("#header").style.color;
console.log(element);

element = document.querySelector("#header").style.backgroundColor = "tan";
console.log(element);

element = document.querySelector("#header").style.color = "blue";
console.log(element);

element = document.querySelector("#header").className = "abc  xyz";
element = document.querySelector("#header").className;
console.log(element);
element = document.querySelector("#header").classList = "abc  xyz";
element = document.querySelector("#header").classList;
console.log(element);
element = document.querySelector("#header").classList.add("xyz", "efg");
element = document.querySelector("#header").classList;
console.log(element);
element = document.querySelector("#header").classList.remove("xyz");
element = document.querySelector("#header").classList;
console.log(element);



var element;
document.getElementById("header").onclick = abc;
function abc() {
    document.getElementById("header").style.background = "green";
}

document.getElementById("header").onmouseenter = abc;
function abc() {
    document.getElementById("header").style.background = "green";
}

document.getElementById("header").addEventListener("mouseenter", abc);
document.getElementById("header").addEventListener("click", function () {
    document.getElementById("header").style.border = "10px solid aqua";
    this.style.border = "10px solid aqua";
});
function abc() {
    document.getElementById("header").style.background = "green";
}
document.getElementById("header").addEventListener("mouseleave", abc);
function abc() {
    this.style.background = "green";
}
document.getElementById("header").addEventListener('click', xyz);
function xyz() {
    document.getElementById("header").removeEventListener('mouseleave', abc)
}



var element;
document.getElementById("header").addEventListener("click", abc);
function abc() {
    document.getElementById("header").classList.add("xyz", "efg");
    var a = document.getElementById("header").classList;
    console.log(a);
}
function abc() {
    var a = document.getElementById("header").classList;
    console.log(a);
}
function abc() {
    var a = document.getElementById("header").classList.length;
    console.log(a);
}
function abc() {
    var a = document.getElementById("header").classList.toggle("xyz");
    console.log(a);
}
function abc() {
    var a = document.getElementById("header").classList.item(1);
    console.log(a);
}
function abc() {
    var a = document.getElementById("header").classList.contains("abc");
    console.log(a);
}
