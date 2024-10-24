const tempCelciusEl = document.getElementById("celcius");
const tempFahrenheitEl = document.getElementById("fahrenheit");
const tempKelvinEl = document.getElementById("kelvin");

const calculateTemp = (event) => {
  const currentValue = parseInt(event.target.value);

  switch (event.target.name) {
    case "celcius":
      tempFahrenheitEl.value = ((currentValue * 9) / 5 + 32).toFixed(2);
      tempKelvinEl.value = (currentValue + 273.15).toFixed(2);
      break;

    case "fahrenheit":
      tempCelciusEl.value = (((currentValue - 32) * 5) / 9).toFixed(2);
      tempKelvinEl.value = (((currentValue - 32) * 5) / 9 + 273.15).toFixed(2);
      break;

    case "kelvin":
      tempCelciusEl.value = (currentValue - 273.15).toFixed(2);
      tempFahrenheitEl.value = (((currentValue - 273.15) * 9) / 5 + 32).toFixed(
        2
      );
      break;

    default:
      break;
  }
};
