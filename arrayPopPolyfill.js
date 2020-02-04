// Необходимо реализовать полифилы для следующих методов:
// Array.pop


function arrayPopPolyfill(arr) {
    arr.length = arr.length - 1;
}

const popFruits = ['apple', 'cherry', 'banana'];

arrayPopPolyfill(popFruits)

console.log(popFruits)
