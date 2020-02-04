// Необходимо реализовать полифилы для следующих методов:
// Array.push

function arrayPushPolyfill(array, push) {
    return array[array.length] = push;
}

const pushFruits = ['apple', 'cherry', 'banana'];

arrayPushPolyfill(pushFruits, 'kiwi');

console.log(pushFruits);

arrayPushPolyfill(pushFruits, 'orange');

console.log(pushFruits);
