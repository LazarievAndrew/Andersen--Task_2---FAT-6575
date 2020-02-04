// Необходимо реализовать полифилы для следующих методов:
// Array.filter

function arrayFilterPolyfill(arr, handler) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (handler(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

function positive(number) {
    if (number > 0) return true;
};

 const arrForFilter = [2, -4, 5, -3, -7, -8, 9, 78]

console.log(arrayFilterPolyfill(arrForFilter, positive))
