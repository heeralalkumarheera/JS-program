// console.log('Jai shree ram')
// var myName='Heeralal Kumar Sahni\n'
// var college='Government Engineering College \n'
// var distric='Darbhanga\n'
// var via='Kusheshwar \n'
// var mobile=9065241296
// console.log(myName,college,distric,via,mobile)
// console.log(typeof(myName))
// console.log(typeof(mobile))
// console.log(5 + 10);
// console.log("Remainder Operator " +27%4);
// var num=15;
// var newNum=++num;
// console.log(num);
// console.log(newNum);
// var a=30;
// var b=20;
// console.log(a==b);
// console.log(a!=b);
//swapping two number without using third variable
// var a=5;
// var b=10;
// a=a+b;
// b=a-b;
// console.log(a,b);
//swapping two number with third variable
// var a=20;
// var b=40;
// var c=b;
// b=a;
// a=c;
// console.log(a,b)
//  var tomr='rain';
//  if(tomr=='sunny'){
//   console.log("take a raincoaat");
//  }else{
//   console.log("no need to take rain coat")
//  }
//leap year program
// var leapYear=2021;
// if(leapYear%4==0 && (leapYear%400==0 || leapYear%100!==0 )){
//   console.log("This year is leap year")
// }else{
//   console.log("not a leap year")
// }
//total 5 falsy values in javascript that is 0, " ",undefine,null NaN,faslse** is false
// if(score=0){
//   console.log("we loss the game")
// }else{
//   console.log("won the game")
// }
//condition
//  var age=17;
//  if(age>=30){
//   console.log("eligible to vote")
//  }else{
//   console.log("not eligible to vote")
//  }
//ternary condition operator where you get the three operands
// var age=12;
// console.log((age>=18)? "you can vote" : "You cannot vote")

// while loop
// var num=0;
// while(num <=10){
//   console.log(num);
//   num++;
// }

//for loop
// for(var num=0;num<=10;num++){
//   console.log(num)
// }

//table
// var n=8;
// for(var num=1;num<=10;num++){
//   console.log(n*num);
// }

//table
// var n=5;
// for(var a=1;a<=10;a++){
//   console.log(n+"*" +a+ "=" +n*a);
// }

//table of 20
// var n=20;
// for(var a=1;a<=10;a++){
//   console.log(n+ "*" +a+ "=" +n*a)
//  }

//var
// var myName="Heeralal"
// console.log(myName)

// function sum(a,b){

//     return total=a+b;
// }
// var add=sum(10,20)
// console.log(add);
// function sum(a,b){
//     var total=a+b;
//     console.log(total)
// }
// var sum=sum(10,50)
//anonymus function
// var funexp=function(a,b){
//     return total=a+b;
// }
// console.log(funexp(5,10));

// var heera=function(c,d){
//     return c-d;
// }
// console.log(heera(50,40))
// var heera=function(a,b){
//     return a*b;
// }
// console.log(heera(20,10))
//var,let and const
// var myName="Heeralal";
// myName="lal"
// myName="Sahni"
// console.log(myName) //here overridding case is occuranace

//tamplets
// for(let num=1;num<=10;num++){
//     let tableOf=10;
//     // console.log(tableOf + "*" + num + "=" +tableOf*num);
//     console.log(`${tableOf}*${num}=${tableOf*num}`);
// }
// var mydata=['Heera','ramesh','arjun','vishal'];
// console.log(mydata[1])
// console.log(mydata.length)

// var heera=['apple','ball','cat','dog']
// for(let elements in heera){
//     console.log(elements);
// }

// let a=[7,3,5,8]
// a.sort()
// console.log(a)

// let b = [2, 1, 5, 8, 9, 4, 0, 2, 5, 8, 9, 15];
// b.sort();
// console.log(b);
// let a=[3,5,1,2,8,5,9,0,6,10]
// a.sort()
// console.log(a)

// const animals=['eggs','omlet','eggfried'];
// animals.unshift ('egg curry','egg roll','eff momos');
// console.log(animals);
// // animals.splice(2,1,10,20);
// animals.splice(2,2,11,22);
// console.log(animals);

//splice method of array
//  const months=['jan','march','april','june','july'];

// months.splice(1,0,'feb');
// months.splice(4,0,'may')
// console.log(months);
//  months.splice(2,1,'March')
// console.log(months)

// console.table() method
//console.table({ a: 1, b: 2, c: 3, d: 5, e: 9 });

// console.count() method
// for(let i=0;i<5;i++){
//     console.count(i);
// }
// console.clear()

// console.warn('Heeralal kumara Sahni')
// console.error('heerallal')

// Return the product of a and b
// function Product(a, b) {
//     return a * b;
// };

// console.log(Product(6, 10));

// const curDate= new Date();
// // console.log(curDate.getDate());
// console.log(curDate.toLocaleDateString());
// console.log(curDate.getTime());
// console.log(curDate.getMonth());
// console.log(curDate.getDay());

// const curTime=new Date();
// console.log(curTime.getTime());

//  console.log(Math.floor(Math.random()*10));

// obj={a:1,b:2,c:3}
// console.table()

// alert(location.href);
// if (confirm("Want to Visit YouTube?")) {
//   location.href = "https://www.youtube.com";
// }

// inp = prompt("Hi", "No");

// 1. Variables and Data Types
// var name = "Heeralal Kumar Sahni"; // String
// var age = 25; // Number
// var isStudent = true;

//mapping

// Basic Syntax of map():
// let newArray = oldArray.map(function(element) {
//     // Return a transformed value
// });
// const array=[1, 2, 3, 4, 5];
// let newArray=array.map(function(element) {return element*2;});
// console.log(newArray); // [2, 4, 6, 8, 10]

// for table
// console.log(array*2); // [2, 4, 6, 8, 10]

// const array1=[5,3,6,7,2,8,9,1,4]
// let newArray1=array1.map(function(element) {return element*2;});
// console.log(newArray1); // [10, 6, 12, 14, 4, 16, 18, 2, 8]

//Mapping with Arrow Functions
// const array = [1, 2, 3, 4, 5];
// const newArray = array.map(element => element * 2);
// console.log(newArray); // [2, 4, 6, 8, 10]

// const array=[25,36,49,64,81,100]
// const newArray=array.map(function(element) {return Math.sqrt(element)});
// console.log(newArray); // [5, 6, 7, 8, 9, 10]

// const newArray1 =array.map(function(element) {return array>50;});
// console.log(newArray1); // [false, false, false, false, true, true]


// console.log(Date.now()); // 1698356480000

// var d=new Date(2026,0,5);
// console.log(d.toLocaleDateString()); // 1/5/2026

// console.log(Math.min(5, 10, 15, 20)); // 5

//math.random()
// console.log(Math.random()); // 0.123456789

// console.log(Math.floor(Math.random()*10)); // 0-9


// let randowmNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randowmNumber); // 1-10 

// table
// obj={a:1,b:2,c:3}
// console.table(obj);

 
// revision fucntion

// function heera(){
//     console.log("hello world");
// }
// heera();

// function heera1(){
//     console.log("hello world1");
// }
// heera1();


// //function with return value
// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20)); //30

// //function with parameter
// function name(myName){
//     console.log("Heera," +myName);
// }
// name("Sahni"); //Heera,Sahni

// //function wiht arrow function
// const multiply=(a,b)=>{
//     return a*b;
// }
// console.log(multiply(10,20)); //200


// let numbers=[1, 2, 3, 4, 5];
// let squares=numbers.map(num=> num*num);
// console.log(squares); // [1, 4, 9, 16, 25]

//or
// console.log(numbers*numbers); // [1, 4, 9, 16, 25]


//even no
// let number=[i=0, i<=50, i+=1]
// let evenNumber=number.filter(num=> num%2==0);
// console.log(evenNumber); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48]


//odd no
// let number=[i=0, i<=50, i+=1]
// let oddNumber=number.filter(num=> num%2!=0);
// console.log(oddNumber); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]

//sorting
// let array=[5, 3, 8, 1, 4];
// array.sort();
// console.log(array); // [1, 3, 4, 5, 8]

//Create an Object
// let person={
//     name: "Heeralal Kumar Sahni",
//     age: 25,
//     city: "Darbhanga",
//     };
// console.log(person); // { name: 'Heeralal Kumar Sahni', age: 25, city: 'Darbhanga' }
// //Accessing Object Properties
// console.log(person.name); // Heeralal Kumar Sahni
// console.log(person.age); // 25
// console.log(person.city); // Darbhanga

// //Adding Properties to an Object
// person.age=26;
// console.log(person.age); // 26
// person.name="Heeralal";
// console.log(person.name); // Heeralal
// console.log(person); // { name: 'Heeralal', age: 26, city: 'Darbhanga' }

// //deleting properties from an object
// delete person.city;
// console.log(person); // { name: 'Heeralal', age: 26 }

// //looping through an object
// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

//creating a class
// class person{
//     constructor(name,age,city){
//         this.name=name;
//         this.age=age;
//         this.city=city;
//     }
//     greet(){
//         console.log("Hello, my name is " + this.name);

// }
// }
// const person1=new person("Heeralal Kumar Sahni",25,"Darbhanga");
// const person2=new person("Ramesh Kumar Sahni",30,"Darbhanga");
// console.log(person1);
// console.log(person2);


//selecting an element by id
// let title=document.getElementById("title");
// console.log(title); // <h1 id="title">Hello World</h1>
// title.innerHTML="Hello Sahni"; // <h1 id="title">Hello Sahni</h1>


//Event loop in javascript
// console.log("Start");
// setTimeout(function() {
//     console.log("Timeout 1");
// }, 5);
// Promise.resolve().then(function() {
//     console.log("Promise 1");
// });
// console.log("End");
// console.log("Start");
// setTimeout(() => {
//     console.log("Delayed for 10 second.");
//   }, 10000);

//paraller function of timeout not wait for the first function to complete
// setTimeout(() => {
//     console.log("this is the first message");
//   }, 5000);
//   setTimeout(() => {
//     console.log("this is the second message");
//   }, 3000);
//   setTimeout(() => {
//     console.log("this is the third message");
//   }, 1000);
  

//javascript local storage
// localStorage.setItem("name", "Heeralal Kumar Sahni");
// localStorage.setItem("age", 25);
// localStorage.setItem("city", "Darbhanga");
// console.log(localStorage.getItem("name")); 