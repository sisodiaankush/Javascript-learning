/*function hello(){
    console.log("hello ankush !");
}
console.log(hello());
function name(){
    console.log("hello ankush !");
    console.log("how are you");
}
console.log(name());*/
/*function num (){
    for(let i=0; i<=5; i++){
        console.log(i)
    }
}*/
//num();
/*function number () {
    for(let i=1; i<=10; i=i+2){
        console.log(i);
    }
}
console.log(number());*/
//if else
   /*  let num= prompt("guess number");
    function even () {  
        if(num%2==0){
            console.log("even number");
        }else{
            console.log("odd number");
        }
    }
    even();*/
    
    /*function adult(){
        let age =prompt("guess age");
        if(age>18){
            console.log("adult");
        }else{
            console.log("not adult");
        }
    }
    console.log(adult())*/
    /*function poem(){
        console.log("twinkle twinkle little star\n")
        console.log("twinkle twinkle little star\n")
    }
    poem();*/
    /*function dice () {
        let num=Math.floor(Math.random()*6)+1;
        console.log(num);
    }
dice();*/
/*function info(name,age){
    console.log(`${name}`);
        console.log(`${age}`);
}
info("ankush", 22);*/
/*function sum(a,b){
console.log(`the sum of two number :  ${a+b}`);
}
sum(5,6);*/
/*function avg (a,b,c){
    let res=a+b+c;
    let total = res/3;
console.log(total)
}
avg(8,7,9);*/
/*function mul(n){
    for(let i=n; i<=n*10;i=n+i){
        console.log(i)
    }
}*/
//mul(5);
/*function sqr(n){
    console.log(`sqare of a number: ${n*n}`);
}
sqr(5);*/
/*function iseven(n){
    if(n%2==0){
        console.log("even number");
    }else{
        console.log("odd number");
    }
}
iseven(4);
iseven(9);*/
/*function calculatearea(length,width){
    console.log(`area of rectangle ${length*width}`);

}
calculatearea(4,5);*/
/*function findmax(a,b,c){
    //console.log(Math.max(a,b,c));
    if(a>b && b>c){
        console.log(`a is greatest ${a}`);
    }else if(b>a){
        console.log(`b is greatest ${b}`);
    }else{
        console.log(`c is greatest ${c}`);
    }
}
findmax(18,9,7);*/
//return value
/*function sum(a,b){
    return a+b;
}
let add =sum(9,8);
console.log(add);*/

/*function greet(name ,age){
return  "hello , my name is : "+ name + ",  my age is : " + age ;
}
let msg=greet("ankush",22);
console.log(msg);*/
/*function getsum(n){
    let sum= 0;
    for(let i=1; i<=n;i++){
        sum= sum+i;
    }
    return sum;
}
let add = getsum(5)
console.log(add);*/
/*function concat(string){
let str =["hii","i","am","ankush"];
let result;
for(let i=1; i<=str.length; i++){
result =str[i]
}
return result;
}
let msg= concat();
console.log(msg)*/
//block scope
/* {
    let a= 30;

 }
 console.log(a);*/

/* {
    var a= 32;
 }
 console.log(a);*/
/* for(let i= 1; i<=5; i++){
    console.log(i)
 }
 console.log(i);*/
  /*for(var i= 1; i<=5; i++){
    console.log(i)
 }
console.log(i);*/
//lexical scope
/*let a=9;
function outer (){
    let b=10;
function inner(){
    console.log(a);
    console.log(b);
}
inner();
}
outer();*/
/*function outer() {
    let b=0;
    function inner() {
        let c=90;
        console.log(b)
    }
    inner();
    console.log(c);
}
outer();*/
/*function outer(){
    let msg ="hello";
    function inner(){
        console.log(msg);
    }
    return inner;
}
let fn= outer();
console.log(fn);*/
/*var globalvar ="hello i am";
function showvar(){
    console.log(globalvar);
}
showvar();
console.log(globalvar);

let x= 5;
function show(){
    console.log(x)
}
show();
console.log(x);
let globalmsg="hello world";
function greet(){
    console.log(globalmsg);
}
greet()*/
//higher order function
/*function saymyname(callback){
    callback();
}
function success(){
    console.log("sucess")
}
saymyname(success);

function  multigreet(funct,n){
    for(let i =1; i<=n; i++){
        funct();
    }
}
let greet=function(){
    console.log("hello");
}
multigreet(greet,2);

let odd = function(n){
    console.log(!(n%2==0));
}
let even = function(n){
    console.log(n%2==0);
}
function oddeeven(request){
    if(request=="odd"){
        let odd = function(n){
    console.log(!(n%2==0)); 
}
return odd;
    }
    else if(request=="even"){
        let even = function(n){
    console.log(n%2==0);
}
return even;
    }else{
        console.log("wrong request");
    }
}
let request ="odd";*/

/*const calc ={
    add:function(a,b){
        return a+b;
    },
    sub :function(a,b){
        return a-b;
    }
};
calc.add(3,4);*/
///shorthand function inside object
const calc ={
    add(a,b){
        return a+b;
    },
    mul(a,b){
        return a*b;
    }
};