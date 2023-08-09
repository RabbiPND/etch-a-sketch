const resetBtn = document.querySelector('#reset-btn')
const gridContainer = document.querySelector('#container')
const newGrid = document.querySelector('#new-grid')



function createGrid(rows, cols) {
    // gridContainer.innerHTML = ''; // Clear existing grid

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const gridItem = document.createElement("div");

            gridItem.classList.add("grid-item");
            gridContainer.append(gridItem);
            gridItem.addEventListener('mouseenter', () => {
                gridItem.style.backgroundColor = 'gold';
            })
        }
    }

}

// Call the function to create a 16x16 grid
createGrid(16, 16)

function clearGrid() {
    const cells = gridContainer.querySelectorAll('.grid-item');
    cells.forEach(gridItem => {
        gridItem.style.backgroundColor = 'white';
    });

}


resetBtn.addEventListener('click', clearGrid)

newGrid.addEventListener('click', () => {
   const number = parseInt(prompt('Enter a grid size')) 

   if(!isNaN(number)) {
    console.log(`You entered ${number}`);
    createGrid(number)

   } else {
    alert('Please enter a grid size that is less or equal to 100') // insert text NB
   }

})





