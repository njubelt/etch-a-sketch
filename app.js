let cdiv = document.getElementById('mainGrid');
let resolutionSlider = document.getElementById("resolution");
let output = document.getElementById("resolutionValue");

//output.innerHTML = resolutionSlider.value;//display default value on refresh

createGrid(25); //default value

let cell = document.getElementsByClassName("grid");
cell.addEventListener("mouseover", function( event ) {
  alert("mouse over test!")
  });


//FROM DISCORD: give it a class, and then use getElementsByClassName or querySelectorAll

resolutionSlider.oninput = function() {
     output.innerHTML = this.value;
     clearGrid();
     createGrid(this.value);
   } 


function clearGrid() {
     cdiv.innerHTML = "";
}

function createGrid(numberPerRow) {
     const total = numberPerRow * numberPerRow;

     for (let i = 0; i < total; i++) {
          const div = document.createElement('div');
          const dim = 500/numberPerRow;
          div.style.cssText = "height:" + dim + "px; width:" + dim + "px;";
          div.setAttribute("class", "grid")
          cdiv.appendChild(div);
     }
}

