// Необходимо реализовать полифилы для следующих методов:
// Object.freeze

function objectFreezePolyfill(obj) {
    for(let prop in obj){
        Object.defineProperty(obj, prop,{configurable: false, writable: false})
    }
};

const freezeMan = {
    'head': true,
    'hand': 2,
    'leg': 2,
};

objectFreezePolyfill(freezeMan);

freezeMan.head = false;
freezeMan.hand = 3;
freezeMan.leg = 'four';

console.log(freezeMan);
