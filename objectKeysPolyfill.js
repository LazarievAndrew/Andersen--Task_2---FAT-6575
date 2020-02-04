// Необходимо реализовать полифилы для следующих методов:
// Object.keys

function objectKeysPolyfill(obj) {
    const keys = [];
    for (let key in obj){
        keys.push(key);
    }
    return keys;
}

const bears = {
    'first': 'slavutich',
    'second': 'jiguli',
    'third': 'obolon',
}

console.log(objectKeysPolyfill(bears))
