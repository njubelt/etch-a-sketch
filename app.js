createGrid(25); //default value

var resolutionSlider = document.getElementById("resolution");
var output = document.getElementById("resolutionValue");
output.innerHTML = resolutionSlider.value;//display default value on refresh

resolutionSlider.oninput = function() {
     output.innerHTML = this.value;
     clearGrid();
     createGrid(this.value);
   } 

function clearGrid() {
     const cdiv = document.getElementById('mainGrid');
     cdiv.innerHTML = "";
}

function createGrid(numberPerRow) {
     const cdiv = document.getElementById('mainGrid');
     const total = numberPerRow * numberPerRow;

     for (let i = 0; i < total; i++) {
          const div = document.createElement('div');
          const dim = 500/numberPerRow;
          div.style.cssText = "margin-top: -1px; margin-left: -1px; border-bottom: 1px solid black; border-right: 1px solid black; height:" + dim + "px; width:" + dim + "px;";
          div.setAttribute("id", "grid")

          cdiv.appendChild(div);
     }
}

