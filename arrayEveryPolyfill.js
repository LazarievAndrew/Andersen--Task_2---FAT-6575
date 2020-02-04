// Необходимо реализовать полифилы для следующих методов:
// Array.every

function arrayEveryPolyfill(arr, handler) {
    for (let item of arr) {
        if (!handler(item)){
            return false;
        };
    };
    return true;
};

function negative(element) {
    return element < 0;
};

const everyArray1 = [-3, 0, -8, -79, -1, 9, -8];
const everyArray2 = [-3, -8, -8, -79];

console.log(arrayEveryPolyfill(everyArray1, negative));
console.log(arrayEveryPolyfill(everyArray2, negative));
