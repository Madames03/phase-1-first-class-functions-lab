const drivers = ['Antonio', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, -2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function (farePerRide){
    return function(howManyFaresNeeded){
        return farePerRide * howManyFaresNeeded
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, theOtherFunction){
    return theOtherFunction(drivers)
}