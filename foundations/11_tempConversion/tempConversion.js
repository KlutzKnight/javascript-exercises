const convertToCelsius = function(temp) {
  let multiplicationFactor = 1.8;
  let additionFactor = 32;
  let tempInCelsius = (temp - additionFactor) / multiplicationFactor;

  return Math.round( ( tempInCelsius * 10 )) / 10;
};

const convertToFahrenheit = function(temp) {
  let multiplicationFactor = 1.8;
  let additionFactor = 32;
  let tempInFahrenheit = (multiplicationFactor * temp) + additionFactor;

  return Math.round((tempInFahrenheit * 10)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
