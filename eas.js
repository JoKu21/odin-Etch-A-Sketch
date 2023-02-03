//Declare grid size 16x16
const gridCount = 16;
const gridElemSize = 1;


//declare and style container
const canvas = document.getElementById('container');
canvas.style.cssText = 'display: flex; flex-wrap: wrap; max-width: 960px; max-height: 960px; margin: auto; border: 1px solid darkgrey;';
canvas.style.cssText += `width: calc((${gridElemSize}*1rem) * ${gridCount})`;

//Create Grid
function makeGrid(gridCount) {
    for(let i = 1; i <= (gridCount * gridCount); i++) {
        const gridElem = document.createElement('div');
        gridElem.classList.add('item');
        gridElem.style.cssText = `height: calc(${gridElemSize}*1rem); width: calc(${gridElemSize}*1rem); background-color: white; border: 1px solid darkgrey`;
        gridElem.addEventListener('mouseleave', () => {
            gridElem.style.cssText += 'background-color: black;';
        })
        canvas.appendChild(gridElem);
    }
}

//Call "Create grid" function
makeGrid(gridCount);

//Let colors change on hover



