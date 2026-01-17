/*let str ="helLo";
console.log(str.trim());
console.log("  ankush  " .trimStart());
console.log("  ankush  " .trimEnd());
console.log(str.toUpperCase());
let msg ="ANKUSH";
console.log(msg.toLowerCase());*/
//index 
/*let str="hello world";
console.log(str.indexOf("e"));//1
console.log(str.indexOf("r",2));//8
console.log(str.indexOf("o"));//4
console.log(str.indexOf("o",5));*/
//let str ="ankush is my friend and  he always plays cricket a lot";
//console.log(str.lastIndexOf("friend"));
//sole.log(str.lastIndexOf("u",6));
//console.log(str.indexOf("y",5));

//chaining
/*let str = " error ";
let res= str.trim().toUpperCase().toLowerCase();
console.log(res);

let msg ="please avoid drinking";
console.log(msg.trim().toUpperCase());*/
//slice
/*let str ="hello world";
console.log(str.slice(-4,-1).toUpperCase());*/
//replace
/*let msg ="i love my india , i live here";
console.log(msg);
console.log(msg.replace("live","study").replace("study","work"));
let str ="i work for google and was intern at cisco";
console.log(str);
console.log(str.replace("google","ibm"));*/
//repeat

/*let str ="i love my india  ,";
console.log(str.repeat(2));
str="i love my self\n"
console.log(str.repeat(10))

let msg =" hello ";
console.log(msg.trim().toUpperCase())*/

//array
/*let students =["ankush","ayush","aryan","raj","raghu","ravan","ram"];
console.log(students.length);
console.log(students[1][0]);
console.log(students[0].length);
console.log(students[0][0]);*/

/*let fruits =["apple","pine","banana","grapes"];
console.log(fruits[0]="orange");
console.log(fruits[2]="jackfruits");
//push add to end
console.log(fruits.push("apple"));
console.log(fruits.push("guava"));
//unshift add to start
console.log(fruits.unshift("mango"));
console.log(fruits.unshift("pomegranate"));
console.log(fruits);
//pop delete from end
console.log(fruits.pop());
console.log(fruits.pop());
//shift delete from start
console.log(fruits.shift())
console.log(fruits.shift());
let months =["january","july","march","august"]
//july june march august
console.log(months.shift());
console.log(months.shift());
console.log(months.unshift("june"));
console.log(months.unshift("july"));*/

//array index of
/*let fruits =["apple","pine","banana","grapes"];
console.log(fruits.indexOf("grapes"));
console.log(fruits.indexOf("pine"));
//includes true or false
console.log(fruits.includes("apple"));
console.log(fruits.includes("pineapple"));*/

//merge two array
/*let n1=["a","b","c","d"];
let n2 =["e","f", "g","h"];
console.log(n1.concat(n2));
console.log(n2.concat(n1));
let n3 =["i","j","k","l"];
console.log(n1.concat(n2).concat(n3));
console.log(n3.concat(n2).concat(n1));*/

//reverse an array
/*let n1 =["a","b","c","d"];
console.log(n1.reverse().reverse().reverse());
let n2 =["e","f","g","h"];
console.log(n2.reverse().reverse());*/

//slice
//        6   5   4   3  2    1 
//let n1=["a","b","c","d","e","f"];
//       0   1   2   3   4   5
/*console.log(n1.slice(1,4));//b c d
console.log(n1.slice(0,5));//a b c d e
console.log(n1.slice(-4,-1));//c d e
console.log(n1.slice(-6,-3));//a b c*/

//splice
//let n1 =["a","b","c","d","e","f","g","i","j","k","l","m"];
//console.log(n1.splice(2));
//console.log(n1.splice(3));
//console.log(n1.splice(0,3));
//console.log(n1.splice(0,3,1,2,3));
//console.log(n1.splice(0,0,"x","y"));

//array sort
/*let n1 =["f","o","a","p","c","b","x","d"];
console.log(typeof n1);
console.log(n1.sort());
let n2 =[9,8,7,6,5,4];
console.log(n2.sort());*/

/*let months=["january","july","march","august"];
console.log(months.splice(0,2,"july","june"));

let lang =["c","c++","html","javascript","python","java","c","sql"];
console.log(lang.reverse());
console.log(lang.indexOf("javascript"));*/

//aray refrences
/*console.log([1]==[1]);
console.log([]==[]);
let a= [1,2];
let b=[1,2];
console.log(a==b);
console.log(a.push(3))
console.log(a==b);
let c=[1,2];
let d =c;
console.log(c==d);
console.log(c.push(3))
console.log(c==d);
let e=f;
console.log(e==f);*/

//contant array

///const n1= ["a","b","c","d","e","f"];
///console.log(n1.push("g"));
//console.log(n1.pop());
//n1=["h","i","j"];

//nested array
/*let n=[[1,2],[3,4],[5,6]];
console.log(n[0][0]);
console.log(n.length);
console.log(n[1][0]);*/

//object in javascript
let student ={
    name:"ankush",
    age:22,
    hobby:"cricket",
};
console.log(student);
console.log(typeof student);

let color ={
red :56,
green:78,
brown:[67,78,77],
};
console.log(color);

let post ={
    username :"@ankushkumar",
    content :"cricktpage",
    likes:33,
    repost:2.3,
    tags:["@ankush","@anup"]
};
console.log(post);

