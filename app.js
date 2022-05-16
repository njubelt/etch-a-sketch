createGrid(16);

function createGrid(numberPerRow) {
     const cdiv = document.getElementById('mainGrid');
     const total = numberPerRow * numberPerRow;

     for (let i = 1; i < total; i++) {
          const div = document.createElement('div');
     
     div.style.cssText = "border: 1px solid black; height: 25px; width: 25px; display: flex";
     

     cdiv.appendChild(div);
     }
}

