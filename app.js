let cells= document.querySelectorAll('.cell');
let btnReset= document.querySelector('.button');
let turn = 1;

for(let cell of cells){
    cell.addEventListener('click', () => {
        if(!cell.textContent){
            if(turn % 2){
                cell.textContent = 'X';
            }
            else{
                cell.textContent = 'O';
            }
            turn++;
        }
    });
}

btnReset.addEventListener('click', () => {
    for(let cell of cells){
        cell.textContent = '';
    } 
});