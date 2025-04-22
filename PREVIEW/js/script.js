"use strict"

const num = 90;

if (num < 49) {
    console.log('Меньше чем 50')
} else if (num > 49) {
    console.log('Больше чем 50')
} else {
    console.log('Равен 50')
}

(num < 49) ? console.log('меньше чем 50') : console.log('Error');


const name = 'Zhansaya'
switch (name) {
    case 'Nastya': 
        console.log('Orys, ahahahhaha');
        break;
    case 'John': 
        console.log('Negr. ahahahahahahhaha');
        break;
    case 'Zhansaya':
        console.log('Soska, ahahahhahahahahahaha');
        break;
    default: 
        console.log('Adam emes! HAHAHAHA')
        break;
}