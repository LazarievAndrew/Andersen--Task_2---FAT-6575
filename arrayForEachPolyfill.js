// Необходимо реализовать полифилы для следующих методов:
// Array.forEach

function arrayForEachPolyfill(arr, handler) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = handler(arr[i]);
    };
};

function nameLength(name) {
    return name.length;
};

const forEachFruits = ['apple', 'cherry', 'banana'];

arrayForEachPolyfill(forEachFruits, nameLength);

console.log(forEachFruits);
