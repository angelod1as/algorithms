const wordGroup = {
  digit: [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ],
  double: [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ],
  round: [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ],
}

const millions = (number: number): string => {
  if (number >= 1000000) {
    const firstPart = millions(Math.floor(number / 1000000))
    const secondPart = thousands(number % 1000000)
    const middlePart = secondPart
      ? secondPart.includes('and')
        ? ', '
        : ' and '
      : ' '
    return `${firstPart} million${middlePart}${secondPart}`
  }
  return thousands(number)
}

const thousands = (number: number): string => {
  if (number >= 1000) {
    const firstPart = hundreds(Math.floor(number / 1000))
    const secondPart = hundreds(number % 1000)
    const middlePart = secondPart
      ? secondPart.includes('and')
        ? ', '
        : ' and '
      : ' '
    return `${firstPart} thousand${middlePart}${secondPart}`
  }
  return hundreds(number)
}

const hundreds = (number: number): string => {
  const firstPart = wordGroup.digit[Math.floor(number / 100)]
  const secondPart = tens(number % 100)
  const middlePart = secondPart
    ? secondPart.includes('and')
      ? ', '
      : ' and '
    : ' '
  if (number > 99) {
    return `${firstPart} hundred${middlePart}${secondPart}`
  }
  return tens(number)
}

const tens = (number: number): string => {
  if (number < 10) {
    return wordGroup.digit[number]
  } else if (number >= 10 && number < 20) {
    return wordGroup.double[number - 10]
  }
  return `${wordGroup.round[Math.floor(number / 10)]} ${
    wordGroup.digit[number % 10]
  }`
}

const toWords = (number: number) => {
  if (number === 0) {
    return 'zero'
  }
  return millions(number)
}

export default toWords
