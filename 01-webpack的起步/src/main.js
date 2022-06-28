//1.使用commonjs的模块化规范
;const {add , mul} = require('./mathUtils')

console.log(add(2,3));
console.log(mul(2,3));

//2.使用ES6的模块化的规范
import {name,age,height} from "./info";

console.log(name);
console.log(age);
console.log(height);