var newElement=document.createElement("p");
console.log(newElement);

var newElement=document.createElement("h2");
console.log(newElement);

var newText=document.createTextNode("This is just text");
console.log(newText);

var newComment=document.createComment("This is Comment");
console.log(newComment);



newElement.appendChild(newText);
document.getElementById("test").appendChild(newElement);
console.log(newElement);

document.getElementById("test").appendChild(newComment);
console.log(newElement);

var target=document.getElementById("test");
target.insertBefore(newElement ,target.childNodes[0]);



var newElement=document.createElement("h2");

var newText=document.createTextNode("This is just text");
 
var target=document.getElementById("test");
newElement="<h2>This is  headind</h2>"
newText="This is text";
target.insertAdjacentElement("beforebegin" ,newElement);
target.insertAdjacentElement("beforebegin" ,newText);

target.insertAdjacentElement("afterend" ,newText);

target.insertAdjacentElement("efterbegin" ,newText);




var newElement=document.createElement("li");
var newText=document.createTextNode("WOW new text");
newElement.appendChild(newText);

var target=document.getElementById("list");
var oldElement=target.children[0];

//console.log(oldElement);
target.replaceChild(newElement ,oldElement);

target.removeChild(oldElement);


