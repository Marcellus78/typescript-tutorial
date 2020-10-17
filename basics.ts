function add(num1: number, num2: number, show: boolean, phrase: string){
    // if(typeof num1 !== 'number' || typeof num2 !== 'number') {
    //     throw new Error('Incorect input');
    // }
    const result = num1 + num2;
    if(show) {
        console.log(phrase + result);
    } else {
        return num1 + num2;
    }
    
}

const number1 = 5;
const number2 = 2.8;
const showResult = true;
const resultPhrase = 'Result is ';

add(number1, number2, showResult, resultPhrase);
