"use strict;"
const $ = require('jquery');

const sayHello = () => {console.log('Hello!')};

$('body').css('background-color', 'blue');

sayHello();

import newHello from './say-hello';


console.log(newHello.niceHello());