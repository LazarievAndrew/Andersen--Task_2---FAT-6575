// Необходимо реализовать полифилы для следующих методов:
// Array.unshift

function arrayUnshiftPolyfill(arr, unshift) {
    for (let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = unshift;
};

const unshiftFruits = ['apple', 'cherry', 'banana'];

arrayUnshiftPolyfill(unshiftFruits, 'orange');

console.log(unshiftFruits);
