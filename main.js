'use strict';


document.addEventListener('DOMContentLoaded', () => {

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
