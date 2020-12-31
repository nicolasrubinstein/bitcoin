const fetchButton = document.querySelector("#fetch-button");
const priceTitle = document.querySelector("#price-title");
const dateTitle = document.querySelector("#date-title");

import { getFormattedDate } from "./helpers.js";

const getBitcoinInfo = async () => {
  priceTitle.innerHTML = "Cargando...";
  dateTitle.innerHTML = "";
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const data = await response.json();

  const priceString = data.bpi.USD.rate;

  priceTitle.innerHTML = `${priceString} USD`;
  dateTitle.innerHTML = `Última vez actualizado ${getFormattedDate()}`;
};

fetchButton.addEventListener("click", () => {
  getBitcoinInfo();
});
