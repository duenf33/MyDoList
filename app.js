if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registration => {
    console.log("SW Registered!");
    console.log(registration);
  }).catch(error => {
    console.log("SW Registration Failed!");
    console.log(error);
  });
}
console.log(firebase);
// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

window.onload = function() {
  document.getElementById("input").focus();
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

var inp = document.getElementById("input");
inp.addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("sub").click();
  }
}); 

function clicked() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t); 
    if (inputValue === ''){
        alert("Please DO something!");
    } else {
        document.getElementById("ul").appendChild(li);
    }
    document.getElementById("input").value = "";

        var span = document.createElement("SPAN");
        // var txt = document.createTextNode("\u00D7");
        span.className = "close";
        // span.appendChild(txt);
        li.appendChild(span);      

    for (var i = 0 ; i < close.length ; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
            setInterval(function () {
                if (!div.style.opacity) {
                    div.style.opacity = 1;
                }
                if (div.style.opacity > 0) {
                    div.style.opacity -= 0.1;
                } else {
                  div.addEventListener('transitionend', () => div.remove());
                }
            }, 150); 
        }            
    }
}