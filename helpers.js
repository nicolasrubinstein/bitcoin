const toTwoChars = (num) => {
  num = num.toString();
  if (num.length >= 2) {
    return num;
  }
  return `0${num}`;
};

export const getFormattedDate = () => {
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
