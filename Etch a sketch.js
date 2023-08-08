const body = document.body
// body.style.display = 'flex'
// body.style.justifyContent = 'center'
// body.style.alignItems = 'center'
body.style.height = '100vh'
body.style.margin = '0'

const gridContainer = document.createElement('div')
gridContainer.id = 'container'
gridContainer.style.display = 'grid'
gridContainer.style.gridTemplateColumns = 'repeat(16, 30px);'; // Example
gridContainer.style.gridTemplateRows = 'repeat(16, 30px);'; // Example
gridContainer.style.gap = '1px';
gridContainer.style.backgroundColor = '#333'


body.append(gridContainer)


function createGrid(rows, cols) {
    const gridContainer = document.getElementById("container");

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const gridItem = document.createElement("div");
            gridItem.style.width = '100%'
            gridItem.style.height = '100%'
            gridItem.style.backgroundColor = 'white'
            gridItem.style.border = '1px solid #222'
            gridItem.style.transition = 'background-color 0.3s ease-in-out'

            gridItem.classList.add("grid-item");
            gridContainer.append(gridItem);
            gridItem.addEventListener('mouseenter', () => {
                gridItem.style.backgroundColor = 'red';
            })
            gridItem.addEventListener('mouseleave', () => {
                gridItem.style.backgroundColor = 'white';
            });
        }
    }

}

// Call the function to create a 16x16 grid
createGrid(16, 16);






