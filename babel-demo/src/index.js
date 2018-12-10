// import 'babel-polyfill';
let i = 0;
console.log(`i=${i}`);
console.log('Hello World!');

function addAll() {
  return Array.from(arguments).reduce((a, b) => a + b, 10);
}

let s = addAll(1,2,3,4);
console.log(`s=${s}`);

class P {
  say() {
    console.log('say something');
  }
}