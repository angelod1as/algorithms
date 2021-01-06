const romans: {
  [index: string]: number
} = {
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

function toRoman(number: number) {
  let string = ''

  let index: string
  for (index of Object.keys(romans)) {
    const numeral = Math.floor(number / romans[index])
    number -= numeral * romans[index]
    string += index.repeat(numeral)
  }

  return string
}

export default toRoman
