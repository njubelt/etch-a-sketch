let cdiv = document.getElementById('mainGrid');
let resolutionSlider = document.getElementById("resolution");
let output = document.getElementById("resolutionValue");
let defaultVal = 25;//default value

output.innerHTML = defaultVal; //initialize slider value with default
createGrid(defaultVal); //create grid of defaultVal^2 resolution

//function to generate grid
function createGrid(numberPerRow) {
     let total = numberPerRow * numberPerRow;//number of cells in grid
     let dim = 500/numberPerRow;//maintain resolution 

     for (let i = 0; i < total; i++) { //generate individual cells
          const div = document.createElement('div');
          div.style.cssText = "height:" + dim + "px; width:" + dim + "px;";//dynamic dimensioning
          div.setAttribute("class", "grid");

          div.addEventListener("mouseover", function( event ) { //listen for mouseover
               div.style.backgroundColor = "black"; //fill in cell
               });
          cdiv.appendChild(div);
     }
}

//update when slider is changed
resolutionSlider.oninput = function() {
     output.innerHTML = this.value;
     clearGrid();
     createGrid(this.value);
   } 

//set contents of grid to "" before populating again
function clearGrid() {
     cdiv.innerHTML = "";
}