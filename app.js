
//               question no1

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)


        //    var multiArray =[[]]



//                        question no2
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// console.log(matrix[1][2]); 



       


//                           question no3
// 3. Write a program to print numeric counting from 1 to 10.

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }






//                               question no4
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

    //  var tableNumber = +prompt("enter the table number:");
    //  var tableLength = +prompt("enter the length of the table:");
    
    //   for (var i=1; i<=tableLength; i++);{
    //     console.log (tableNumber + " x " + i + " = " + (tableNumber * i));
    //   }
      

                        

//                           question no5
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
                 
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log("Element at index " + i + " is " + fruits[i]);
// }




                          


// //                               question no6
// // 6. Generate the following series in your browser. See
// // example output.
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<h3>a. Counting:</h3>");
// for (var i=1; i<=15; i++){
//   document.write(i + "  , " );
// }
// document.write("<h3>b.reverse Counting:</h3>");
// for (var i=10; i>0; i--){
//   document.write(i + " , ");
// }
// document.write("<h3>c,even:</h3>");
// for (var i = 0; i<=20; i= +2){
//   document.write(i + " , ");
// }
// document.write("<h3>d,odd:</h3>");
// for (var i= 1; i<=20; i= +2){
//   document.write(i + " , ");
// }

// document.write("<h3>e,series:</h3>");
// for (var i=2; i=20; i= +2){
//   document.write(i + " k, ");
// }

//                                    question no7

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:



// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("welcome to ABC bakery.what do you want to order sir/mam?");
// var found =false;
// for (var i=0; i<bakery.length; i++){
//  if (bakery[i]=== userInput){
//   found =true;
//  document.write(userInput + " is <b>available</b> at index " + i + " in our bakery.");
//       break;
//  }
// }
//   if (!found) {
//     document.write("We are sorry. " + userInput + " is <b>not available</b> in our bakery.");
//   }






//                                          question no8


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


//  var A = [24, 53, 78, 91, 12];
//   var largest = A[0]; 

//   for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//       largest = A[i]; 
//     }
//   }

//   document.write("Array items: " + A.join(", ") + "<br>");
//   document.write("The largest number is: " + largest);




//                                         question no9

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


//  var A = [24, 53, 78, 91, 12];
//   var smallest = A[0]; 

//   for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//       smallest = A[i]; 
//     }
//   }

//   document.write("Array items: " + A.join(", ") + "<br>");
//   document.write("The smallest number is: " + smallest);

//                                           question no10

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.


  for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      document.write(i + ", ");
    }
  }