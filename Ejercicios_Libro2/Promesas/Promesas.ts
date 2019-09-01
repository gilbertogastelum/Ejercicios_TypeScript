const promise = new Promise((resolve, reject) => {
    resolve(123);
});
promise.then((res) => {
    console.log('I get called:', res === 123);
});
promise.catch((err) => {
});
//
//
const promise = new Promise((resolve, reject) => {
    reject(new Error("Algo malo a pasado"));
});
promise.then((res) => {
});
promise.catch((err) => {
    console.log('Tengo una llamada: ', err.message);
});