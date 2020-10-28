// 1.Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
for(var i=0;i<=15;i++){
    if(i%2==0){
        console.log(i+" is even");
    }else{
        console.log(i+" is odd");
    }
}
// 2. Create a function sum() that accepts any number of parameters and adds them
// together by iterating over the values in arguments with a while loop.
const sum = function (...args){
    var res = 0;
    var len = 0;
    while(len<args.length){
        res+=args[len];
        len++;
    }
    return res;
}
console.log(sum(1,2,3,4,20));
console.log(sum(3,4,20));

// 3. Write a JavaScript program to delete the rollno property from the
// following object. Also print the object before and after deleting the
// property.
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log(student);
delete student.rollno;
console.log(student);
// 4. Display the length of the object (count of properties using
//Enumeration and Object.keys)
let count = 0;
for(var pro in student){
    count++;
}
console.log(count);
console.log(Object.keys(student).length);

// 5. Write a JavaScript program to sort an array of JavaScript objects.
var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
    function sortBy(key,Asc=false){
        return function sort(a,b){
            if(!a.hasOwnProperty(key)||!b.hasOwnProperty(key)){
                return 0;
            }
            const x = (a[key] instanceof String) ? a[key].toUpperCase() :a[key];
            const y = (b[key] instanceof String) ? b[key].toUpperCase() :b[key];
            return Asc? x-y:y-x;
        };
    }
    library.sort(sortBy('libraryID'));
    console.log(library);

    // 6. Create a constructor function Calculator that creates objects with 3
//methods:
    function Calculator(){
       
        this.read = function() {
            this.a = prompt("please enter the first value");
            this.b = prompt("please enter the first value");
          };
        this.sum = function(){
            return this.a+this.b;
        };
        this.mul = function(){
            return this.a*this.b;
        };
    }
    let calculator = new Calculator();
    calculator.read();
    console.log(calculator.sum());
    console.log(calculator.mul());

// 7. Create a constructor function called Hero That will accept the
//arguments name and occupation.
function Hero(name,occupation){
    this.name = name;
    this.occupation = occupation;
}
//7.1
Hero.prototype.whoAreYou = function(){
    return "My name is " + this.name 
    + " and I am a "+this.occupation;
}
//7.2 & 7.3
let hero1 = new Hero("Michaelangello","Ninja");
console.log(hero1.whoAreYou());

