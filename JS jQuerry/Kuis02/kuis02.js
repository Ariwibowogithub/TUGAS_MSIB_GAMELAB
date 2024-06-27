function tambah(p1, p2) {
    return p1 + p2;
}

function kurang(p1, p2) {
    return p1 - p2;
}

function kali(p1, p2) {
    return p1 * p2;
}

function bagi(p1, p2) {
    if (p2 === 0) {
        return "Error: karena pembagi nya 0";
    }
    return p1 / p2;
}

console.log ( tambah (6,3) );
console.log ( kurang (6,3) );
console.log ( kali (6,3) );
console.log ( bagi(6,3) );
