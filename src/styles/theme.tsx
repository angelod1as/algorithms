const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#CCCCCC',
  darkgray: '#A9A9A9',
  darkergray: '#8B8B8B',
  lightRed: '#e07d7d',
  red: '#a93a3a',
  green: '#5e9e70',
  darkGreen: '#3e7735',
  lightGreen: '#b4e5b5',
}

export interface ThemeProps {
  colors: { [key in keyof typeof colors]: string }
}

export const theme: ThemeProps = {
  colors,
}

export default theme
