type Combinable = number | string;
type Descriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: Descriptor){
    let result;
    
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    
    return result;
    // if(resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    
    
}

const combineAges = combine(30,50, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30','50', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);