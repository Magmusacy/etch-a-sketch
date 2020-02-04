const container = document.querySelector('#container');
const btn = document.querySelector('#reset')
let x = 0;
let color = 0;
let r = 0;
let g = 0;
let b = 0;
const er = document.querySelector('div')
function grid(x) {
    
    const height = 640/x-7
    const width = 640/x-7

    container.style.cssText = `grid-template-columns:repeat(${x}, 1fr)`

for (let i = 0; i < x**2; i++) {
    const rows = document.createElement('div');
    rows.classList.add('rows')
    rows.setAttribute(`style`, `width:${width}px; height:${height}px;`)
    container.appendChild(rows);
    rows.addEventListener('mouseover', (e) => {
        changeColor()
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`       
        })
}
}
function changeColor() {
    r = Math.floor(Math.random()*255+1);
    g = Math.floor(Math.random()*255+1);
    b = Math.floor(Math.random()*255+1)
}
function reset() {
    const btn = document.querySelector('#reset')
    btn.addEventListener('click', () => {
    x = prompt('How many squares per side do u want?','16')
    if (isNaN(x)) {
        alert('Choose a number') 
        return;     // check if the number is a number :O
    }
        while (container.firstChild) {         
            container.removeChild(container.firstChild);
        }       // Loop that deletes all children from container 
    grid(x)
    })
}


grid(16)
reset()
