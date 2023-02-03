//Declare grid size 16x16
const gridCount = 16;

//declare and style container
const canvas = document.getElementById('container');
canvas.style.cssText = 'display: flex; flex-wrap: wrap;';
canvas.style.cssText += `width: calc(2rem * ${gridCount})`;

function row(gridCount) {
    for(let i = 1; i <= (gridCount * gridCount); i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('row');
        gridRow.style.cssText = 'height: 2rem; width: 2rem; background-color: red; border: 1px solid lightgrey';
        canvas.appendChild(gridRow);
    }
}

row(gridCount);
