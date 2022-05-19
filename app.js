let cdiv = document.getElementById('mainGrid');
let resolutionSlider = document.getElementById("resolution");
let output = document.getElementById("resolutionValue");

createGrid(25); //default value

function createGrid(numberPerRow) {
     let total = numberPerRow * numberPerRow;
     let dim = 500/numberPerRow;

     for (let i = 0; i < total; i++) {
          const div = document.createElement('div');
          div.style.cssText = "height:" + dim + "px; width:" + dim + "px;";
          div.setAttribute("class", "grid");
          div.addEventListener("mouseover", function( event ) {
               div.style.backgroundColor = "black";
               });
          cdiv.appendChild(div);
     }
}

resolutionSlider.oninput = function() {
     output.innerHTML = this.value;
     clearGrid();
     createGrid(this.value);
   } 


function clearGrid() {
     cdiv.innerHTML = "";
}