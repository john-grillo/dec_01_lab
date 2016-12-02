'use strict';
//alert('the conversions.js file works. shame on you');
//conversions.js is written by John A. Grillo
//github: www.github.com/john-grillo

/*****************************
  *PROJECT SCOPE - GOALS*
******************************/
// inches to/from centimeters
// miles to/from kilometers
// pounds to/from kilograms
// English shit-ton to metric shit-ton
// fluid ounces to/from milliliters

/*****************************
*GLOBAL VARIABLE DECLARATIONS*
******************************/
//these are static.
var in_to_cm = 2.54;
var cm_to_in = 0.393701;
var mi_to_km = 1.60934;
var km_to_mi = 0.621371;
var lb_to_kg = 0.453592;
var kg_to_lb = 2.20462;
var oz_to_ml = 29.5735;
var ml_to_oz = 0.033814;


/************************************
***FUNCTION DECLARATIONS - DISTANCE**
*************************************/
// inches to/from centimeters
// miles to/from kilometers

function inchesToCentimeters(inches) {
  return (inches * in_to_cm).toPrecision(3);
};

function centimetersToInches(cm){
  return (cm * cm_to_in).toPrecision(3);
}

function milesToKilometers(miles) {
  return (miles * mi_to_km).toPrecision(3);
};

function kilometersToMiles(km) {
  return (km * km_to_mi).toPrecision(3);
};

/************************************
***FUNCTION DECLARATIONS - WEIGHT****
*************************************/
// pounds to/from kilograms
// English shit-ton to metric shit-ton

function poundsToKilos(lbs) {
  return (lbs * lb_to_kg).toPrecision(3);
};

function kilosToPounds(kg) {
  return (kg * kg_to_lb).toPrecision(3);
};

function engShitToMetShit(engShit) {
  return "1 " + engShit + " is equal to Nigel Farange.";
};

function metShitToEngShit(metShit) {
  return "1 " + metShit + " is equal to Donald Trump.";
};

/************************************
***FUNCTION DECLARATIONS - FLUIDS**
*************************************/
// fluid ounces to/from milliliters
// celsius to fahrenheit and back
function kilosToPounds(oz) {
  return (oz * oz_to_ml).toPrecision(3);
};

function kilosToPounds(ml) {
  return (ml * ml_to_oz).toPrecision(3);
};

function celsiusToF(c) {
  return (((c * 9) / 5) + 32);
};

function fToCelsius(f) {
  return (((f - 32) * 5) / 9);
};
