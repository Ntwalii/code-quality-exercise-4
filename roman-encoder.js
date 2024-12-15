
const romanEncoder = number => {
  if (number <= 0) return ''
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  let result = ''
  for (let rom in roman) {
    if (number >= roman[rom]) {
      result += rom
      number -= roman[rom]
      break
    }
  }
  if (number === 0) return result
  result += solution(number)
  return result
}
