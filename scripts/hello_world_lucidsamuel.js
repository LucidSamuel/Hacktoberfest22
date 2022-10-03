// LANGUAGE: Javascript
// ENV: Node.js
// AUTHOR: Samuel Akinosho
// GITHUB: https://github.com/lucidsamuel

// This hello world uses Javascript Objects and Classes.
// Creates a Person object using a Constructor function and a method greeting() that logs out and returns a greeting string.
// Written in ES5 and ES6 versions of Javascript. Comment out one of the versions before running.


// Javascript ES5
var Person = function(name,location){
    this.name = (name) ? name : "Lucid";
    this.place = (location) ? location : "UAE";
  }
  
  Person.prototype.greeting = function(name){
    name = (name) ? name : this.name;
    var str = "Hello, World! by " + name;
    console.log(str);
    return str;
  }
  
  // Javascript ES6
  class Person {
    constructor (name='Anyonymous', location='UAE') {
      this.name = name;
      this.place = location;
    }
    greeting (name=this.name) {
      let str = "Hello, World! by " + name;
      console.log(str);
      return str;
    }
  }
  
  var myself = new Person('Samuel','Dubai');
  myself.greeting();