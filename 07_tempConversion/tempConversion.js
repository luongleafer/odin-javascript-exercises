const convertToCelsius = function(tempF) {
    const tempC = (tempF - 32) / 1.8;
    return Number(tempC.toFixed(1));
};

const convertToFahrenheit = function(tempC) {
    const tempF = (tempC * 1.8) + 32;
    return Number(tempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
