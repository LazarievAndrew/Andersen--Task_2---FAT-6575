// Необходимо реализовать полифилы для следующих методов:
// Array.reverse

function arrayReversePolyfill(arr) {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    };
    for (let i = 0; i < arr.length; i++){
        arr[i] = newArr[i];
    };
};

const reverseFruits = ['apple', 'cherry', 'banana'];

arrayReversePolyfill(reverseFruits);

console.log(reverseFruits);
