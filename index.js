// Code your solution in this file!
// returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function. 

// The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers){
     return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(i){
    return function(fare){
        return fare * i
    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, callback){
    return callback(drivers);
}




// function returnFirstTwoDrivers(drivers){
//     return 

