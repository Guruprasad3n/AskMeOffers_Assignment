function copyText() {
  var textCopy = document.body.innerText;
  navigator.clipboard.writeText(textCopy);
}
var button = document.createElement("button");
button.innerHTML = "Copy Text";
button.setAttribute("id", "copy-text");
button.addEventListener("click", copyText);
// Position
button.style.position = "fixed";
button.style.right = "10px";
button.style.bottom = "10px";
// Style
button.style.backgroundColor = "black";
button.style.border = "0px";
button.style.color = "white";
button.style.padding = "10px 30px";
button.style.textAlign = "center";
button.style.textDecoration = "none";
button.style.fontSize = "18px";
button.style.borderRadius = "7px";
document.body.appendChild(button);
