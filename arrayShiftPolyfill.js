// Необходимо реализовать полифилы для следующих методов:
// Array.shift

function arrayShiftPolyfill(arr) {
    for (let i = 1; i < arr.length; i++){
        arr[i - 1] = arr[i];
    }
    arr.length = arr.length - 1;
}

const shiftFruits = ['apple', 'cherry', 'banana'];

arrayShiftPolyfill(shiftFruits)

console.log(shiftFruits)
