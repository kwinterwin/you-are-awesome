// DO WHATEVER YOU WANT HERE
var counter = 0;
var aCounter = 0;

const createEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName,{
        enumerable: true,
        configurable: true,
        writable: true,
        value: 'empty'});
      return propertyName;
};

const createNotEnumerableProperty = (propertyName) => Symbol();

const createProtoMagicObject = () => {
    var temp = new Function();
    temp.prototype = temp.__proto__;
    return temp;
};

const incrementor = () => { 
  counter++;
  return incrementor;
};

incrementor.valueOf = function() {
    return counter;
  }
  
incrementor.toString = incrementor.valueOf();

const asyncIncrementor = () => {
    var p = new Promise(function(resolve) {
        setTimeout(function() { aCounter++; resolve(aCounter) }, 1);
      });
      return p;
};

const createIncrementer = () => {
    return {
        number: 0,

        [Symbol.iterator]: function() {
            return this;
        },

        next: function() {
            return { value: ++this.number, done: false };
        }
    };
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (argument) => {
    return new Promise(resolve => {
        setTimeout(() => {resolve(argument);}, 1150);
    });
};
const getDeepPropertiesCount = (object) => {
    var counter = 0;
    var count = function(objectToCount) {
      counter = counter + Object.keys(objectToCount).length;
      Object.keys(objectToCount).forEach(function(key) { if (typeof objectToCount[key] === 'object') count(objectToCount[key]) });
    };
    count(object);
    return counter;
};
const createSerializedObject = () => {
    return {
        toJSON: function() {
            return this.toString();
        }
    };
};
const toBuffer = () => {};
const sortByProto = (objects) => {
    var result = [];
    result = objects.sort(function(a, b) {
    return a.__proto__ - b.__proto__;
  });
  return result;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;