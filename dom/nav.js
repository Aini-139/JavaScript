var a=document.getElementById("inner").parentElement;
console.log(a);
var a=document.getElementById("outer").parentElement;
console.log(a);
var a=document.body.parentElement;
console.log(a);
document.getElementById("inner").parentElement.style.background="red";
var a=document.getElementById("inner").parentElement;
console.log(a);
var a=document.getElementById("main").parentNode;
console.log(a);



var a=document.getElementById("inner").children;
console.log(a);
var a=document.getElementById("outer").children;
console.log(a);
document.getElementById("inner").children[1].style.background="blue";
var a=document.getElementById("inner").children[1];
console.log(a);
var a=document.getElementById("inner").childNodes;
console.log(a);
var a=document.getElementById("inner").childNodes[0].innerHTML;
console.log(a);



var a=document.getElementById("inner").firstElementChild;
console.log(a);
document.getElementById("outer").firstElementChild.style.background="yellow";
var a=document.getElementById("outer").firstElementChild;
console.log(a);
document.getElementById("inner").lastElementChild.style.background="yellow";
var a=document.getElementById("inner").lastElementChild;
console.log(a);
document.getElementById("outer").firstElementChild.style.background="yellow";
var a=document.getElementById("outer").lastChild;
console.log(a);
var a=document.getElementById("outer").firstChild;
console.log(a);



var a=document.getElementById("child-C").nextElementSibling;
console.log(a);
var a=document.getElementById("child-C").previousElementSibling ;
console.log(a);
document.getElementById("child-C").previousElementSibling.style.background="aqua";
var a=document.getElementById("child-C").previousElementSibling;
console.log(a);
document.getElementById("child-C").nextElementSibling.style.background="pink";
var a=document.getElementById("child-C").nextElementSibling;
console.log(a);
var a=document.getElementById("child-C").previousSibling;
console.log(a);
var a=document.getElementById("child-C").nextSibling ;
console.log(a);







