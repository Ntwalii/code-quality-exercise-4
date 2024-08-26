const numberFormat = (number) => {
  let count = 0;
  return `${number}`
    .split("")
    .reverse()
    .map((element, index, array) => {
      if (index === array.length - 1) return element;
      count++;
      if (count === 3 && !isNaN(array[index+1])) {
        count = 0;
        return `,${element}`;
      }
      return element;
    })
    .reverse()
    .join("");
};

//const numberFormat = (string) => string.toLocaleString()
