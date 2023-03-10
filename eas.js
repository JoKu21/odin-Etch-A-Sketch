//Declare grid size 16x16
let gridCount = 16;
const gridElemSize = 0.75;

//put focus on input field and Button
document.getElementById('input').focus();

//declare button
const createGridButton = document.querySelector('#submitInput');

//give button a function
createGridButton.addEventListener('click', () => {  
    const insertGridSize = document.getElementById('input').value;
    
    if(insertGridSize > 100) {
        alert('Number is too high. Chose between 1 and 100.');
        document.getElementById('input').focus();
    } else {
        canvas.textContent = ''; //Clear screen
        gridCount = insertGridSize;

        canvas.style.cssText = 'display: flex; flex-wrap: wrap;';
        canvas.style.cssText += `width: calc((${gridElemSize}*1rem) * ${gridCount})`;

        makeGrid(gridCount);
    }
});

//function colorChangeMulti for hover-effect
function colorChangeMulti() {
    //Color declaration
    const red = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);

    //createColor
    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

//function colorChangeParts
function colorChangeParts() {

}

//declare and style container
const canvas = document.getElementById('container');
canvas.style.cssText = 'display: flex; flex-wrap: wrap; margin: auto;';
canvas.style.cssText += `width: calc((${gridElemSize}*1rem) * ${gridCount})`;

//Create Grid
function makeGrid(gridCount) {
    for(let i = 1; i <= (gridCount * gridCount); i++) {
        const gridElem = document.createElement('div');
        gridElem.classList.add('item');
        gridElem.style.cssText = `height: calc(${gridElemSize}*1rem); width: calc(${gridElemSize}*1rem); background-color: white; border: 1px solid darkgrey`;
        gridElem.addEventListener('mouseenter', () => {
            gridElem.style.cssText += `background-color: ${colorChangeMulti()};`;
        })
        canvas.appendChild(gridElem);
    }
}

//Call "Create grid" function
makeGrid(gridCount);

//Let colors change on hover



