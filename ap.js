// js practice assignment 19
// 1. Write a program to display the message “Hello World” 5 times 
// in your browser using for loop
// ans 
// var message = 0;
// for(var i = 1; i <= 5; i++){message = message + i;}
// console.log(message)
// ---------------------------------------------------------------------------
// 2. Write a program to print numeric counting from 1 to 10
// ans 
// for(var i = 1; i <= 10; i++){console.log(i)};
// ==========================================================================
// 3. Write a program to print multiplication table of any number 
// using for loop. Table number & length should be taken as an 
// input from user
// ans 
  let enter_Number = +prompt('enter a number');
  let limit = +prompt('enter limit for printing table');
  console.log('The tabe of ' + enter_Number+':')
  for(var i = 1; i <= limit; i++){console.log(i * enter_Number)}
//  ===========================================================================================
// 4. You have an array 
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”] 
// Write each element on new line with the help of for loop.
// ans 
 let array = ['Nokia','Samsung','Apple','Sony','Huawei'];
 for(var i = 0; i < array.length; i++){console.log(array[i])}
// --------------------------------------------------------------------------------
// 5. Write a program to print items of the following array using for 
// loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”];
// ans 
 let  fruits = ['apple','banana','mango','orange','strawberry'];
 for(var i = 0; i < fruits.length; i++){console.log(fruits[i])}
 console.log('Element at index 0 is '+ fruits[0]);
 console.log('Element at index 1 is '+ fruits[1]);
 console.log('Element at index 2 is '+ fruits[2]);
 console.log('Element at index 3 is '+ fruits[3]);
 console.log('Element at index 4 is '+ fruits[4]);
// ------------------------------------------------------------------------------------------
// ques no 6
// 6. Write a program to initialize an array of N items by using 
// prompt. Where N is number of items as entered by the user
// ans 
//  let array = [];
//  let numberOfItems = +prompt('enter number of items');
//  let value0 = prompt('enter value for index 0');
//  array.push(value0);
//  let value1 = prompt('enter value for index 1');
//  array.push(value1);
//  let value2 = prompt('enter value for index 2');
//  array.push(value2);
//  let value3 = prompt('enter value for index 3');
//  array.push(value3);
//  console.log(array)
//  for(let i = 0; i < 4; i++){console.log(array[i])}
// ==============================================================================
// 7. Generate the following series in your browser. See example 
// output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 
// ans 
// a
// for(var i = 1; i<=15; i++){console.log(i)};
// // b
// for(var i = 10; i>0; i--){console.log(i)}
// // c
// for(var i = 0; i <= 20; i++){if(i %2 === 0){console.log(i)}}
// // d
// for(var i = 1 ; i <=19; i++){if(i % 2 !== 0){console.log(i)}}
// // e 

// for(var i = 2; i<=20; i++){if(i % 2 === 0){console.log(i+'k')}}
// --------------------------------------------------------------------------
// ques no 8
//  You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is 
// found in the list or not. Example:
// ans 
// let array = ['cake','apple pie','cookie','chips','patties'];
// let search = prompt('enter item name your are searching');
// let flag = false;
// for(var i = 0; i < array.length; i++){if(search === array[i])
//     {flag = true;
//         break;
//     }
// }
// if(flag){console.log(search,'is available')}
// else{console.log(search,'is not available')}
// =========================================================================================
// ques no 12
//12. Write a program to print multiples of 5 ranging 1 to 100
// ans 
// for(let i = 5; i <= 100; i = i + 5){console.log(i)}
// ___________________________________________________________________________________________
// // 13. You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90]
// ans 
//  let students = ['Ali','Sami','Taha','Inam'];
//  let scroes = [58,73,89,90];
//  let result = [];
//  for (let i = 0; i < students.length; i++){
//     for(let j = 0 ; j <= i; j++){
//         result.push(students[i] + ' ' + scroes[i])
//     }

//  }
//  console.log(result)


// ----------------------------------------------------------------------------
// 14. Write a program that prints number from start of the array 
// to desired stop value. Given array: 
// var scores  = [12, 45, 3, 22, 34, 50]; 
// (Hint: take stop value from user) 
// E.g. if user gives 3 as input value print 12, 45, 3 
// if user gives 34 as input value print 12, 45, 3, 22, 34
// ans 
// let scores = [12, 45, 3, 22, 34, 50];
// let stopValue = +prompt('Enter stop value');

// for (let i = 0; i < scores.length; i++) {
//     console.log(scores[i]);
//     if (scores[i] === stopValue) {
//         break; // Stop the loop when stop value is found
//     }
// }

// --------------------------------------------------------------------------------
// 15. You have an array 
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ] 
// Write each element on new line with the help of nested for 
// loops.
// let a = [[1,2,3],[4,5,6],[7,8,9]];
// for(var i = 0; i< a.length; i++){
//     for(j = 0;j < a[i].length; j++){console.log(a[i][j])}
// }
// -----------------------------------------------------------------
// ques no 16
//  Write a program to repeatedly print the value of the variable 
// num which is input by user. Value should be decreasing by 0.5 
// each time, as long as x Value remains positive.
// ans 
// let num = +prompt('enter num');
// for(var i = num; i >= 0; i -= 0.5){console.log(i)}
// ------------------------------------------------------------------------------
// 17. The even/odd reporter 
// Write a for loop that will iterate from 0 to 20. For each 
// iteration, it will check if the current number is even or odd, and 
// report that to the screen (e.g. "2 is even").
// ans 
// for(var i = 0; i <= 20; i++){if(i % 2 === 0){console.log(i,'is even')}
// else{console.log(i,'is odd')}}
// ======================================================================================
// 18. Write a program to calculate the product of the odd integers 
// from 1 to 7. 
// ans 
// let product = 1;
// for(var i = 1; i<=7;i++){if(i %2 !== 0){product = product * i}}
// console.log(product)
// """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// 19. Write a program that will write out a wedge of stars. The user 
// will enter the initial number of stars, and the program will write 
// out lines of stars where each line has one few star than the 
// previous line. Initial number of stars: 7 
// ******* 
// ****** 
// ***** 
// **** 
// *** 
// ** 
// *   
// ans 
// for(let i = 7; i > 0; i--){str = '';
//     for(let j = 1; j <= i; j++){str = str + "*";

//     }
//     console.log(str)
// }
// 20. Write a program to create the following patterns in your 
// browser. Take number of lines as an input. 
// a.
//  ***** 
// ***** 
// ***** 
// ***** 
// b.
//  * 
// ** 
// *** 
// **** 
// ***** 
// c.
//  ***** 
// **** 
// *** 
// ** 
// *
// ans 
// a 
// for(let i = 1; i <= 5;i++){str = '';
//     for(let j= 1; j <= 5; j++){let str = str + "*";}
//     console.log(str)
// }
// b 
// for(let i = 1; i <=5; i++){let str = '';
//     for(let j = 1; j <= i; j++){str = str + "*"}
//     console.log(str)
// }
// c
// for(let i = 5; i >0; i --){let str = '';
//     for(let j = 1; j <= i; j++){str = str + '*';}
//     console.log(str)
// }