// Необходимо реализовать полифилы для следующих методов:
// Array.some

function arraySomePolyfill(arr, handler) {
    for (let item of arr) {
        if (handler(item)){
            return true;
        };
    };
    return false;
};

function positive(element) {
    return element > 0;
};

const someArray1 = [-3, 0, -8, -79, -1, 9, -8];
const someArray2 = [-3, 0, -8, -79];

console.log(arraySomePolyfill(someArray1, positive))
console.log(arraySomePolyfill(someArray2, positive))
