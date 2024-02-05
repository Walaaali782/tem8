$(document).ready(function(){
    $('.accordion-header').click(function(){
      $(this).next('.accordion-content').slideToggle();
      $('.accordion-content').not($(this).next()).slideUp();
    });
  });


//  window.alert("Welcome To Engineer Walaa Ali ");
// document.write("<h1>hello <span> page </span> </h1>");
// console.log("welcome");
// console.error("error");
// console.table(["walaa", "ali" ,"hassan"]);
// console.log("%cjs file", "color:#009688 ;font-size:47px"  );
// console.log(typeof "yyyyy");
// console.log(typeof 999);
// console.log(typeof [88,00,99]);
// console.log(typeof true );
// console.log(typeof null);
// console.log(typeof undefined);
// var y = "ahmed";
// hello.innerHTML= "opation";


// var wyyyyy = 0 ;
// console.log(wyyyyy);

// b= "walaa";
// a= "Eng";
// // document.write("Eng\nwalaa\n");
// // console.log("Eng\nwalaa\n");
// // console.log(a,b);
// console.log(`${a} ""''/ 
//  ${b}`);

//  document.write(`${a} "" ' ' / 
//  ${b}`);


// let a = 10 ;
// let b = "20";
// let c = 80 ;
// console.log(++a + +b++ + c++ - +a++);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);


// let d = "-100" ;
// let e = "20";
// let f = 30 ;
// let g = true ;
// console.log(-d * +e);
// console.log(-d +  ++g * +e + ++f + g );


// console.log(1_000_000);
// console.log(1e6);
// console.log(1000000.0000);
// console.log(typeof NaN);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE + 4476686868686);
// console.log((100).toString());
// console.log(100..toString());
// console.log(100.555555.toFixed(2));
// console.log(parseInt("10000"));
// console.log(+"10000");
// console.log(Number("10000"));
// console.log(parseInt("10000 walaa "));
// console.log(parseInt("10000 walaa"));
// console.log(+"10000 walaa");
// console.log(Number("10000 walaa "));
// console.log(parseInt("walaa 10000 walaa "));
// console.log(parseFloat("10000.8888 walaa "));

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.9));
// console.log(Number.isInteger(1000));

// console.log(Number.isNaN("walaa ")); // false
// console.log(Number.isNaN("walaa " / 7)); // ture


// console.log(Math.round(99.2)); 
// console.log(Math.round(99.8)); 
// console.log(Math.ceil(99.2)); 
// console.log(Math.floor(99.8)); 
// console.log(Math.max(99,8,0,7,6)); 
// console.log(Math.min(99,8,0,7,6)); 
// console.log(Math.random()); 
// console.log(Math.trunc(9.9)); 

// Replace ? With Arithmetic Operators
// console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

// let num = 3;

// // Solution One
// console.log(num * 2 ); // 6

// // Solution Two
// console.log(num + 3 ); // 6

// // Soultion Three
// console.log(9 - num); // 6

// // Soultion Four
// console.log(18 / num ); // 6

// // Solution Five
// console.log(2**num - 2 ); // 6

// // Solution Six
// console.log(11 % num + 4); // 6



// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// // Your Solutions
// console.log(1_00000); // 100000
// console.log(100000.00); // 100000
// console.log(1e5); // 100000
// console.log(10_0000); // 100000
// console.log(1000_00); // 100000
// console.log(2e4+ 8e4); // 100000
// console.log(10_00_00); // 100000
// console.log(10_0_0_00); // 100000
// console.log(10000_0); // 100000
// console.log(4e4+ 6e4); // 100000

// console.log(Number.MIN_SAFE_INTEGER * -1 ); // 9007199254740991

// console.log(Number.MAX_SAFE_INTEGER); 

// let myVar = "100.56789 Views";

// console.log(+parseInt(myVar)); // 100
// console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// let num = 10;
// console.log(Number.isInteger(num) + Number.isInteger(num) ); // 2


// let flt = 10.4;

// console.log(Math.floor(flt)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(Math.round(flt)); // 10
// console.log(parseInt(flt)); // 10
// console.log(+flt.toFixed(0)); // 10
// console.log(); // 0 || 1 || 2 || 3 || 4


// let q = "walaa";
// console.log(q.charAt(0));
// console.log(q[0]);
// console.log(q.trim);

// console.log(q.toLowerCase);
// console.log(q.toUpperCase);


// let a = "walaa ali hassan";
// console.log(a.indexOf("ali"));
// console.log(a.indexOf("a"));
// console.log(a.lastIndexOf("a"));
// console.log(a.slice(0,5));
// console.log(a.slice(-6));
// console.log(a.repeat(5));
// console.log(a.split(" "));
// console.log(a.split("",6));
// console.log(a.length);
// console.log(a.substring(2 , 6 ));
// console.log(a.substring(6 , 2 ));
// console.log(a.substring(-10,6)); //-10 == 0
// console.log(a.substring(2 , 6 ));
// console.log(a.substring(length-1));
// console.log(a.substr(0,5));
// console.log(a.substr(-3,2));
// console.log(a.includes("wal"));  
// console.log(a.startsWith("W"));
// console.log(a.startsWith("W",3));
// console.log(a.endsWith("a",5));

// 040 __ 047
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;
// // Method 1
// myFriends.length= num;
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// // Method 2
// myFriends.pop()
// console.log(myFriends ); // ["Ahmed", "Elham", "Osama"];

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// friends.shift();
// friends.pop();
// console.log(friends); // ["Eman", "Osama"]

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];
// finalArr= arrOne.concat(arrTwo).sort().reverse();
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
// let s = words[words.length-1][0] ;
// console.log(s.slice(website.length,s.length  )); // ZERO

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];
// // Write 3 Solutions
// if (haystack.indexOf(needle)===1){
//     console.log("Found");
// }
// if (haystack.lastIndexOf(needle) === 1){
//     console.log("Found");
// }
// if (haystack.includes(needle)){
//     console.log("Found");
// }

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];
// Your Code Here
// allArrs= arr1.concat(arr2);
// console.log(allArrs);
// allArrs.sort();
// console.log(allArrs.join("").toLowerCase().slice(arr2.length,allArrs.length )); // fxy


// Array Methods Challenge
// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// my.reverse().shift();
// my.slice(zero,counter);
// my.shift();
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(1,counter)); // ["Elham", "Mazero"]

//  let c = my[2];
//  let a = my[1];
//  let w = c.slice(0,2) + a.slice(2,6);
// console.log( w ); // "Elzero"
// console.log(w.slice(4,6)); // "rO"


// let a = ["ttt","ppp","ooo","iii","dddd"];
// let b = ["a","z","l","k","u"];
//  for(let i =0 ; i < a.length ; i++){  
//     console.log(a[i])
//     for(let j =0 ; j < b.length ; j++){  
//         console.log( `- ${b[j]}`)  
//     }
//  }



// let a = ["keyword","pen ","ipone ","mouse","pad", "pointer","pad"];
// let b = ["red","blue","green"];
// let c = 5;
// document.write(`<h1>Show ${c} productes</h1>`)
//  for(let i =0 ; i < c ; i++){  
//     document.write(`<div>`);
//     document.write(`<h3> [${i + 1}] ${a[i]} </h3>`);
//     for(let j =0 ; j < b.length ; j++){  
//         document.write( `<p> ${b[j]} </p>`);
//     }
//      document.write( `<p> ${b.join(" | ")} </p>`);
//     document.write(`</div>`);
//  }


// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i = start ; i <= end ; i+=start ){
// if(i==exclude){
// continue;
// }
// console.log(i);
// }

// let start = 10;
// let end = 0;
// let stop = 3;

//  for(let i = start ; i > end ; i-- ){
// if(i<stop){
// break;
// }
// if(i< 10 ){
// console.log("0" + i);
// }else{
// console.log(i);
// }
//  }
// // Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// let start = 1;
// let end = 6;
// let breaker = 2;
// for(let i = start ; i <= end ; i++ ){
// console.log(i);
// console.log("--" + breaker );
// console.log("--" + (end - breaker) );

// }
// let index = 10;
// let jump = 2;
// let i = index;
// for (;;) {
//  console.log(i);
//  if(i == jump){
// break;
//  }
//  i=-jump;
// }
// // Output
// 10
// 8
// 6
// 4

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let i =0 ;
// for(; i< friends.length ; i++){
//     if(friends[i][0] == letter.toUpperCase()){
//         continue;
//     }
//     console.log(i + "=>" + friends[i]);}
// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// let start = 0;
// let swappedName = "elZerO";
// for( i= start ; i< swappedName.length ; i++){
//         if(swappedName[i] != swappedName[i].toUpperCase() ){
//            document.write(swappedName[i].toUpperCase());
//         }else{
//             document.write(swappedName[i].toLowerCase());    }    }
// // Output
// "ELzERo"

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for( i= start ; i< mix.length ; i++){
// if (i== start){
// continue;
// }
// if (mix[i] >= '0' && mix[i] <= '9'){
//     console.log(mix[i]);
//     }
// }
// // Output
// 2
// 3
// 4


// تكليفات JavaScript Bootcamp من الدرس 054 إلى 056
// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while (index < friends.length) {
//     if(typeof friends[index] === "number" || friends[index].startsWith("A"))
//     {
//         index++;
//         continue;
//     }
//     console.log( `"${++counter} => ${friends[index]}"`);
//     index++;
// }
// Output
// "1 => Sayed"
// "2 => Mahmoud"


// collange 56 
// let w =  0 ;
// let myadim = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let employee  = ["Amgad", "Sameh", "Ameer", "Omar", "Othman", "Amany", "Samia"];
// document.write(`<div> we have x adim </div> `)
// document.write(`<div> we have ${3} adim </div>`)
// for(   i=0 ; i < myadim.length ; i++ ){
//     if(myadim[i] ==="Stop"){
//         break;
//     }
//     document.write(`<hr>`)
//     document.write(`<div>`)
//     document.write(`<div> the admin for team ${i+1} is ${myadim[i]}  </div`)
//     document.write(`<br>`)
//     for(   j=0 ; j < employee.length ; j++ ){
//         if(employee[j].charAt(0)===myadim[i].charAt(0) ){
//             document.write(`<div> ${w+1} _ ${employee[j]} </div`)
//             w++;
//             document.write(`<br>`)
//         }
//         else{
//             continue;
//         }
//     }
//     w=0;
//     document.write(`</div>`)
// }








































































