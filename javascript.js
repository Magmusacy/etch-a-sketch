const container = document.querySelector('#container');
const reset = document.querySelector('#reset')
let x = 0;
const rainbow = document.querySelector('#rainbow')
rainbow.addEventListener('change', () => {
    console.log(rainbow)
    if (rainbow.checked) {
        rainbowColor(1)
    } else {
        rainbowColor(0)
    }

})
const blcktowhit = document.querySelector('#blck_to_whit')
blcktowhit.addEventListener('change', () => {
    if (blcktowhit.checked) {
        blackToWhite(1)
    } else {
        blackToWhite(0)
    }
})
function grid(x) {
    

    const height = 640/x
    const width = 640/x

    container.style.cssText = `grid-template-columns:repeat(${x}, 1fr)`

for (let i = 0; i < x**2; i++) {
    const rows = document.createElement('div');
    rows.classList.add('rows')
    rows.setAttribute(`style`, `width:${width}px; height:${height}px; opacity:1;`)
    container.appendChild(rows);
    
}
}


function blackToWhite(o) {
    if(o === 1) {
    color1 = document.querySelector('div')
    color1.addEventListener('mouseover', (e) => {
    e.target.style.opacity = parseFloat(e.target.style.opacity) - 0.1;
    container.style.backgroundColor = 'white';
    container.style.opacity = '1';
    })
    }
    else {
    color1.addEventListener('mouseover', (e) => {
        e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
        container.style.backgroundColor = 'white';
        container.style.opacity = '1';    
    })
}
}


function rainbowColor(o) {
    if(o === 1) {
    color2 = document.querySelector('div')
    color2.addEventListener('mouseover', (e) => {
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`
    container.style.backgroundColor = 'white';
    container.style.opacity = '1';
    })
} else {
    color2.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'rgb(0,0,0)'
        container.style.backgroundColor = 'white';
        container.style.opacity = '1';
    })
}

}
function resetFunc() {
    reset.addEventListener('click', () => {
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
resetFunc()