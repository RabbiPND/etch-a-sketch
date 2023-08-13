const gridContainer = document.querySelector('#container')

let isDrwaing = false



const newGrid = document.querySelector('#new-grid')
newGrid.addEventListener('click', () => {
const number = parseInt(prompt('Enter a grid size')) 
 
    if(!isNaN(number) && number <= 100) {
     console.log(`You entered ${number}`);
    createGrid(number)
     } else {
        alert('Please enter a grid size that is less or equal to 100')
    } 
    }
 )



const resetBtn = document.querySelector('#reset-btn')
function clearGrid() {
    const cells = gridContainer.querySelectorAll('.grid-item');
    cells.forEach(gridItem => {
        gridItem.style.backgroundColor = 'white';
    });

}
resetBtn.addEventListener('click', clearGrid)


function createGrid(size) {
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 20px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 20px)`;

     gridContainer.innerHTML = ''; // Clear existing grid
     

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const gridItem = document.createElement("div");

            gridItem.classList.add("grid-item");
            gridContainer.append(gridItem);
            gridItem.addEventListener('mouseenter', () => {
                gridItem.style.backgroundColor = 'gold';


            })
            
            gridItem.addEventListener('mouseenter', () => {
                if(isDrwaing) {
                    const randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
                    gridItem.style.backgroundColor = randomColor
                }})
        }
    }

}

const rainBow = document.querySelector('#rainbow')
rainBow.addEventListener('click', () => {
    isDrwaing = !isDrwaing
    rainBow.classList.toggle('active', isDrwaing) //isDrawing is currently false, when you click the button, it turns to true
})
  

console.log(rainBow)











