// Необходимо реализовать полифилы для следующих методов:
// Array.join

function arrayJoinPolyfill(arr, separator = '', quantity = arr.length) {
    let str = '';
    for(let i = 0; i < quantity; i++){
        if (i === quantity -1){
            str += arr[i].toString();
        } else {
            str += (arr[i].toString() + separator);
        }
    }
    return str;
};

const joinFruits = ['apple', 'cherry', 'banana', 'orange', 'kiwi'];

let joinedFruits = arrayJoinPolyfill(joinFruits, ', ', 4);

console.log(joinedFruits);
