const reverseVowels = string => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const stringArray = string.split('')
  const vowelsInString = 
    stringArray
    .map(element => {
      if (vowels.includes(element)) return element
    })
    .filter(Boolean)
    .reverse('')
  return stringArray
    .map(element => {
      const currentVowel = vowelsInString[0]
      if (vowels.includes(element)) {
        vowelsInString.shift()
        return currentVowel
      }
      return element
    })
    .join('')
}
