var index;
var panels;
var rgbColor;
var numPanels = 6;

newColors();
setPanelEvents();


document.querySelector("#newColors").addEventListener("click", function() {
  newColors();
  this.textContent = "NEW COLORS";
});

document.querySelector("#easy").addEventListener("click", function() {
  this.parentNode.classList.add("active");
  numPanels = 3;
  newColors();
});

document.querySelector("#hard").addEventListener("click", function() {
  this.parentNode.classList.add("active");
  numPanels = 6;
  newColors();
});

function setPanelEvents() {
  for (var i=0; i<panels.length; i++) {
    panels[i].addEventListener("click", function() {
      if (this.style.backgroundColor == rgbColor) {
        for (var j=0; j<panels.length; j++) {
          panels[j].style.backgroundColor = rgbColor;
          document.querySelector(".title").style.backgroundColor = rgbColor;
          panels[j].style.visibility = "visible";
          document.querySelector("#msg").textContent = "Correct!";
          document.querySelector("#newColors").textContent = "PLAY AGAIN?";
        }
      }
      else {
        this.style.visibility = "hidden";
        document.querySelector("#msg").textContent = "Try again!";
      }
    });
  }
}

function newColors() {
  index = Math.floor(Math.random()*numPanels);
  var content = document.querySelector(".content")
  removeChildren(content);
  
  for (var i=0; i<numPanels; i++) {
    var panel = document.createElement("div");
    panel.setAttribute("class", "panel");
    content.append(panel);
  }
  
  panels = document.querySelectorAll(".panel");
  
  for (var i=0; i<panels.length; i++) {
    panels[i].style.backgroundColor = rndColor();
    if (i==index) rgbColor = panels[i].style.backgroundColor;
  }
  
  document.querySelector("h1").textContent = rgbColor;
  document.querySelector(".title").style.backgroundColor = "#5078FA";
  
  setPanelEvents();
}

function rndColor() {
  var color = "";
  for (var i=0; i<6; i++)
    color += "01234567890ABCDEF"[Math.floor(Math.random()*16)];
  return "#" + color;
}

function removeChildren(node) {
  var l = node.childNodes.length;
  for (var i=0; i<l; i++)
    node.removeChild(node.firstChild)
}

/*
for (var i=0; i<panels.length; i++) {
  panels[i].style.backgroundColor = rndColor();
  if (i==index) rgbColor = panels[i].style.backgroundColor;
  
  panels[i].addEventListener("click", function() {
    if (this.style.backgroundColor == panels[index].style.backgroundColor) {
      alert("you won, add panels back with same color");
    }
    else {
      alert("delete this panel");
    }
  });
}
*/