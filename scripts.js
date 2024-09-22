console.log("Hello world test");
/*
const container = document.querySelector(".container");
const btnResize = document.querySelector("button");



function createDiv() {
    let numValue = 729;
    for(let i = 0 ; i < numValue; i++) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "newDiv")
      container.appendChild(newDiv);
      newDiv.addEventListener("mouseover" , function(){
      newDiv.style.backgroundColor = "red";
        });
     } 
     btnResize.addEventListener("click", function() {
      let extraValue = parseInt(prompt("Give me a number between 16 - 100"));
      let extraValueSum = extraValue * extraValue;
      let boxWidthValue = (600 / extraValue) - 2;
      let boxHeightValue = (600 / extraValue) - 2;
      container.remove();
      const containerExtra = document.createElement("div");
      containerExtra.setAttribute("class", "container");
      document.body.appendChild(containerExtra);
      for(let j = 0 ; j < extraValueSum ; j++) {
        const newDivExtra = document.createElement("div");
        newDivExtra.setAttribute("class", "newDivExtra");
        newDivExtra.style.width = boxWidthValue + "px";
        newDivExtra.style.height = boxHeightValue + "px";
        containerExtra.appendChild(newDivExtra);
        newDivExtra.addEventListener("mouseover", function(){
          newDivExtra.style.backgroundColor = "red";
        });
      }
      btnResize.addEventListener("click", function() {
        containerExtra.remove();
      });
      
      });
}

createDiv();

*/

const container = document.querySelector(".container");
const btnResize = document.querySelector("button");
const mainContainer = document.querySelector(".right-container");
const btnRGB = document.querySelector("#rgb");
const btnClassic = document.querySelector("#classic");
const btnClear = document.querySelector("#clear");

function randomInteger(max) {
  return Math.floor(Math.random()*(max + 1));
}

let r;
let g;
let b;

function randomRgbColor() {
  r = randomInteger(255);
  g = randomInteger(255);
  b = randomInteger(255);
  return r,g,b;
}

function createDiv() {
    let numValue = 729;
    for(let i = 0 ; i < numValue; i++) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "newDiv");
      container.appendChild(newDiv);
      
      newDiv.addEventListener("mouseover" , function(){
      newDiv.style.backgroundColor = "red"; 
      //randomRgbColor();
      //newDiv.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        });
      btnRGB.addEventListener("click", function(){
        newDiv.addEventListener("mouseover", function(){
        randomRgbColor();
        newDiv.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        });
      });

      btnClassic.addEventListener("click", function(){
        newDiv.addEventListener("mouseover", function(){
          newDiv.style.backgroundColor = "red";
        });
      });

      btnClear.addEventListener("click", function(){
        newDiv.style.backgroundColor = "aqua";
      });
     } 
     btnResize.addEventListener("click", function() {
      let extraValue = parseInt(prompt("Give me a number between 1 - 100"));
      if (extraValue > 100) {
        alert("Please choose a frame lower than 100.");
        extraValue = 27;
      } else if (extraValue === 0) {
        alert("The lowest amount of frame can only be 1. Please stick to the boundaries.");
        extraValue = 27;
      }
        let extraValueSum = extraValue * extraValue;
        let boxWidthValue = (600 / extraValue) - 2;
        let boxHeightValue = (600 / extraValue) - 2;  
      container.remove();
      const containerExtra = document.createElement("div");
      containerExtra.setAttribute("class", "container");
      //document.body.appendChild(containerExtra);
      mainContainer.appendChild(containerExtra);
      for(let j = 0 ; j < extraValueSum ; j++) {
        const newDivExtra = document.createElement("div");
        newDivExtra.setAttribute("class", "newDivExtra");
        newDivExtra.style.width = boxWidthValue + "px";
        newDivExtra.style.height = boxHeightValue + "px";
        containerExtra.appendChild(newDivExtra);
        newDivExtra.addEventListener("mouseover", function(){
         newDivExtra.style.backgroundColor = "red";
          //randomRgbColor();
          //newDivExtra.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        });
        btnRGB.addEventListener("click", function(){
          newDivExtra.addEventListener("mouseover", function(){
               randomRgbColor();
              newDivExtra.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
          });
        });

        btnClassic.addEventListener("click", function(){
          newDivExtra.addEventListener("mouseover", function(){
            newDivExtra.style.backgroundColor = "red";
          });
        });
        
        btnClear.addEventListener("click", function(){
          newDivExtra.style.backgroundColor = "aqua";
        });
      }
      btnResize.addEventListener("click", function() {
        containerExtra.remove();
      });
      
      });
}

createDiv();
