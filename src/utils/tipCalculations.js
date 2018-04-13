//Takes an array, returns the day object with the highest tipAmount
const getHighestTipDay = arr => {
  if (arr.length === 0) {
    return 'none';
  }
  let indexOfHighest = 0;
  let highestTipAmount = 0;
  arr.forEach(day => {
    if (day.tipAmount > highestTipAmount) {
      highestTipAmount = day.tipAmount;
      indexOfHighest = arr.indexOf(day);
    }
  });
  return arr[indexOfHighest];
};

//Takes an array, returns the day object with the highest hourly amount
const getHighestHourlyDay = arr => {
  if (arr.length === 0) {
    return 'none';
  }
  let indexOfHighest = 0;
  let highestHourlyAmount = 0;
  arr.forEach(day => {
    if (Math.round(day.tipAmount / day.hoursWorked) > highestHourlyAmount) {
      highestHourlyAmount = Math.round(day.tipAmount / day.hoursWorked);
      indexOfHighest = arr.indexOf(day);
    }
  });
  return arr[indexOfHighest];
};

//Sums and returns the total tipAmount from a given aray
const getTotalTips = arr => {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, cur) => {
    return acc + cur.tipAmount;
  }, 0);
};

//Sums and returns the total hours from a given array
const getTotalHours = arr => {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, cur) => {
    return acc + cur.hoursWorked;
  }, 0);
};

//Filters a given array by dayName, used to gather stats in the following getDayOfWeekData function
const dayFilter = (arr, dayName) => {
  let filtered = arr.filter(day => {
    return day.dayName === dayName;
  });
  return filtered;
};

//Loops through the data of a given array, and filters the data by dayName, returning an object with properites based
//on the previous functions.
const getDayOfWeekData = arr => {

};

//Operates on the dayOfWeekData object returned by the getDayOfWeekData function.  Returns a day of the week with the highest gross tipAmount
const getBestTipDayOfWeek = obj => {

};

//Operates on the dayOfWeekData object returned by the getDayOfWeekData function.  Returns a day of the week with the highest hourlyAverage
const getBestHourlyDayOfWeek = obj => {

};

//This function uses all previous functions to generate an object to be used on the Summary page with all neccessary data
const getStatistics = arr => {

};

export default getStatistics;
