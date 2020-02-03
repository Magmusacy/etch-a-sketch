const container = document.querySelector('#container');
const btn = document.querySelector('#reset')
let x = 0;
function grid(x) {
    container.style.cssText = `grid-template-columns:repeat(${x}, 1fr)` 

for (let i = 0; i < x**2; i++) {
    const rows = document.createElement('div');
    rows.classList.add('rows')
    container.appendChild(rows);
    rows.addEventListener('mouseover', (e) => {
        e.target.classList.add('mouseover')
        })
}
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
