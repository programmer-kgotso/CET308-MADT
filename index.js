const _ = require('lodash');

const numbers = [33,22,33,76,48,87,16]; 

_.each(numbers, function(number, i){
    console.log(number);
});