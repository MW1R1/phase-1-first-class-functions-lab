// Code your solution in this file!
const returnFirstTwoDrivers = function (cars) {  
return cars.slice(0, 2); 
}
const returnLastTwoDrivers = function (cars) {  
    return cars.slice(2); 
    }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function(num){
    function innerFunction(number){
        return num * number;
    }
    return innerFunction;
    } 
    const fareDoubler = createFareMultiplier(2)
    const fareTripler = createFareMultiplier(3)
    function selectDifferentDrivers(drivers, fun) {
        return fun (drivers)
    }

