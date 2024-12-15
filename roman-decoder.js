const romanDecoder = (roman) => {
  const romanCharacters = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let prevNum, num;
  return roman.split("").reduce((acc, char, index, arr) => {
    num = romanCharacters[char];
    prevNum = romanCharacters[arr[index - 1]];
    if (num > prevNum) {
      return acc + (num - prevNum * 2);
    } else {
      return (acc += num);
    }
  }, 0);
};
