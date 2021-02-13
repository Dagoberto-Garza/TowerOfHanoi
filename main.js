'use strict';
const n = 7;
let moves = 0;

document.addEventListener('DOMContentLoaded', () => {
  
    let runBtn = document.getElementById('run');
    let col1 = document.getElementById('col1');
    let col2 = document.getElementById('col2');
    let col3 = document.getElementById('col3');

    
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



   

    const TOWERS = [[], [], []];

    function canMove(from, to) {
        const FROM = TOWERS[from];
        const TO = TOWERS[to];
        return FROM.length && (!TO.length || FROM[0] < TO[0]);
    }
    
    function move(from, to) {
        if (!canMove(from, to)) return;
        const FROM = TOWERS[from];
        const TO = TOWERS[to];
        const newHeight = TO.unshift(FROM.shift());
        console.log(`Disk of size ${TO[0]} moved from ${from} to ${to}`);
    }
    
    function move2(from, to) {
        const temp = 3 - from - to; // ONLY works with 3 towers!
        if (!canMove(from, temp)) return;
        move(from, temp);
        if (!canMove(from, to)) return;
        move(from, to);
        move(temp, to);
    }
    
    function move3(from, to) {
        const temp = 3 - from - to;
        if (!canMove(from, temp)) return;
        move2(from, temp);
        if (!canMove(from, to)) return;
        move(from, to);
        move2(temp, to);
    }
    
    function moveN(n, from, to) {
        if (n === 1) return move(from, to);
        const temp = 3 - from - to;
        if (!canMove(from, temp)) return;
        moveN(n - 1, from, temp);
        if (!canMove(from, to)) return;
        move(from, to);
        moveN(n - 1, temp, to);
    }
    
});
