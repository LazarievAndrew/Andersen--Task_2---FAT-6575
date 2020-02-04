// Необходимо реализовать полифилы для следующих методов:
// Array.map

function arrayMapPolyfill(arr, handler) {
    const mapArr = [];
    for (let i = 0; i < arr.length; i++) {
        mapArr.push(handler(arr[i]));
    };
    return mapArr;
};

function nameLength(name) {
    return name.length;
};

const mapFruits = ['apple', 'cherry', 'banana'];

console.log(arrayMapPolyfill(mapFruits, nameLength))
