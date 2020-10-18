var input;
var userName;
input = 5;
input = 'Max';
if (typeof input === 'string') {
    userName = input;
}
function throwError(message, code) {
    throw { message: message, errorCode: code };
}
throwError('An error occured', 500);
