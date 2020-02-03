const container = document.querySelector('#container');
const columns = document.createElement('div');
const rows = document.createElement('div');
function grid(x) {
    //container.cssText = `grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr);`;
  

/*for (let j = 0; j < x**2; j++){
    const columns = document.createElement('div')
    columns.classList.add('columns')
    container.appendChild(columns);

}*/
for (let i = 0; i < x**2; i++) {
    const rows = document.createElement('div');
    rows.classList.add('rows')
    container.appendChild(rows);
    rows.addEventListener('mouseover', (e) => {
        console.log(e.target.style.background = 'black')
    } )
}
}
grid(16)
