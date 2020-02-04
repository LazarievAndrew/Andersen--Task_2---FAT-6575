// Необходимо реализовать полифилы для следующих методов:
// Array.reduce

function arrayReducePolyfill(arr, handler, initialValue = undefined) {
    let result = initialValue;
    for (let i = 0; i < arr.length; i++){
        result = handler(result, arr[i]);
    }
    return result;
};

function multiplicator(acc, element) {
    return acc * element;
}

reduceArr = [2, 6, 7, 3, 9];

let reduced = arrayReducePolyfill(reduceArr, multiplicator,1 );

console.log(reduced);


