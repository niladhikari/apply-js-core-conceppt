function isLeapYear(year) {
   let leapYear = [];
    for (let i = 0; i < year.length; i++) {
        const element = year[i];
        if (element % 400 == 0 || (element % 4 == 0 && element % 100 != 0)) {
            leapYear.push(element);
          } 
    }
    return leapYear;
  }
  
  var year =[2023,1920,2100,2024];
  var leapyear = isLeapYear(year)
  console.log('This years is leapyear',leapyear)