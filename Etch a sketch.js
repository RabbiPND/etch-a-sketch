
const newGrid = document.querySelector('#new-grid')
newGrid.addEventListener('click', () => {
const number = parseInt(prompt('Enter a grid size')) 
 
    if(!isNaN(number)) {
     console.log(`You entered ${number}`);
     if(number <= 16) {
        createGrid(number)
     } else {
        alert('Please enter a grid size that is less or equal to 16')
    } 
    }
 })

 const resetBtn = document.querySelector('#reset-btn')
function clearGrid() {
    const cells = gridContainer.querySelectorAll('.grid-item');
    cells.forEach(gridItem => {
        gridItem.style.backgroundColor = 'white';
    });

}
resetBtn.addEventListener('click', clearGrid)


const gridContainer = document.querySelector('#container')
function createGrid(size) {
     gridContainer.innerHTML = ''; // Clear existing grid
     

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
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
createGrid(size)








