//14. Combining Import Statements
import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function (element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function (element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function (element) {
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();


/* We can import the collection of objects and functions with the same data.

We can use an import keyword to import both types of variables */
