//leap year check using if else condition
// var year = 2024;
// if(year%400==0 || (year%4==0 && year%100!=0)){
//     console.log("This is LeapYear");
// }
// else{
//     console.log("This is not LeapYear");
// }

//leap year check using if else condition and function

// function isLeapYear(year) {
//   if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//     return true ;
//   } 
//   else {
//     return false;
//   }
// }

// var year = isLeapYear(2024);
// console.log('This year is leap year',year)


function isLeapYear(year) {
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        return 'leap year' ;
      } 
      else {
        return 'Common year';
      }
    }
    
    var year = isLeapYear(20233);
    console.log('This year is',year)