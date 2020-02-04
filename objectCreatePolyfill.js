// Необходимо реализовать полифилы для следующих методов:
// Object.create

function objectCreatePolyfill(obj) {
    function newObj() {}
    newObj.prototype = obj;
    return new newObj();
};

const man = {
    'head': true,
    'hand': 2,
    'leg': 2,
};

const newMan = objectCreatePolyfill(man);

console.log(newMan);
