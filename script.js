const fetchButton = document.querySelector("#fetch-button");
const priceTitle = document.querySelector("#price-title");
const dateTitle = document.querySelector("#date-title");

const toTwoChars = (num) => {
  num = num.toString();
  if (num.length >= 2) {
    return num;
  }
  return `0${num}`;
};

const getFormattedDate = () => {
  const date = new Date();
  const str =
    toTwoChars(date.getFullYear()) +
    "-" +
    toTwoChars(date.getMonth() + 1) +
    "-" +
    toTwoChars(date.getDate()) +
    ", " +
    toTwoChars(date.getHours()) +
    ":" +
    toTwoChars(date.getMinutes()) +
    ":" +
    toTwoChars(date.getSeconds());

  return str;
};

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
