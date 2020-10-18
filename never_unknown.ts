let input: unknown;
let userName: string;

input = 5; 
input = 'Max';

if(typeof input === 'string') {
    userName = input;
}

function throwError(message: string, code: number): never {

    throw {message: message, errorCode: code};
}

throwError('An error occured', 500);
