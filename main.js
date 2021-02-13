'use strict';
const n = 7;
let moves = 0;

document.addEventListener('DOMContentLoaded', () => {
  
    let runBtn = document.getElementById('run');
    
    function tower(n, from_rod, to_rod, aux_rod) {
        moves++; 
        if (n === 1) {
            console.log("moved disk 1 from rod",from_rod,"to rod",to_rod);
            return
        }
        tower(n-1,from_rod,aux_rod,to_rod);
        console.log("moved disk",n,"from rod",from_rod,"to rod",to_rod)
        tower(n-1,aux_rod,to_rod,from_rod);
    }   

    runBtn.addEventListener('click', event => {
        tower(n,'A','C','B');
        console.log("moves: ",moves);
    });



   
});
