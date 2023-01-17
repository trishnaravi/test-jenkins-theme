function addMessage() {
  document.getElementById("jenkins").innerHTML = "<div>HELLO</div>" + document.getElementById("jenkins").innerHTML;
}

window.onload = addMessage;
