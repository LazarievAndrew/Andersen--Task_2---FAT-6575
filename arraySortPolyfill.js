// Необходимо реализовать полифилы для следующих методов:
// Array.sort

function arraySortPolyfill(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 0; j < arr.length - 1; j++){
            let a = arr[j];
            let b = arr[j + 1];
            if (arr[j].toString() > arr[j + 1].toString()) {
                arr[j] = b;
                arr[j + 1] = a;
            }
        }
    }
    return arr;
}

const  sortArr = [9, 6, 2, 8];

arraySortPolyfill(sortArr);

console.log(sortArr);
