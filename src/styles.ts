import { Styles, Style } from './types'

const RESET_COLOR = 39
const RESET_BG_COLOR = 49

export const styles: Styles = {
  [Style.reset]: [0, 0],

  // Text styles
  [Style.bold]: [1, 22],
  [Style.dim]: [2, 22],
  [Style.italic]: [3, 23],
  [Style.underline]: [4, 24],
  [Style.inverse]: [7, 27],
  [Style.hidden]: [8, 28],
  [Style.strikethrough]: [9, 29],

  // Text colors
  [Style.black]: [30, RESET_COLOR],
  [Style.red]: [31, RESET_COLOR],
  [Style.green]: [32, RESET_COLOR],
  [Style.yellow]: [33, RESET_COLOR],
  [Style.blue]: [34, RESET_COLOR],
  [Style.magenta]: [35, RESET_COLOR],
  [Style.cyan]: [36, RESET_COLOR],
  [Style.white]: [37, RESET_COLOR],
  [Style.gray]: [90, RESET_COLOR],
  [Style.grey]: [90, RESET_COLOR],

  // Bright text colors
  [Style.brightRed]: [91, RESET_COLOR],
  [Style.brightGreen]: [92, RESET_COLOR],
  [Style.brightYellow]: [93, RESET_COLOR],
  [Style.brightBlue]: [94, RESET_COLOR],
  [Style.brightMagenta]: [95, RESET_COLOR],
  [Style.brightCyan]: [96, RESET_COLOR],
  [Style.brightWhite]: [97, RESET_COLOR],

  // Background colors
  [Style.bgBlack]: [40, RESET_BG_COLOR],
  [Style.bgRed]: [41, RESET_BG_COLOR],
  [Style.bgGreen]: [42, RESET_BG_COLOR],
  [Style.bgYellow]: [43, RESET_BG_COLOR],
  [Style.bgBlue]: [44, RESET_BG_COLOR],
  [Style.bgMagenta]: [45, RESET_BG_COLOR],
  [Style.bgCyan]: [46, RESET_BG_COLOR],
  [Style.bgWhite]: [47, RESET_BG_COLOR],
  [Style.bgGray]: [100, RESET_BG_COLOR],
  [Style.bgGrey]: [100, RESET_BG_COLOR],

  // Bright background colors
  [Style.bgBrightRed]: [101, RESET_BG_COLOR],
  [Style.bgBrightGreen]: [102, RESET_BG_COLOR],
  [Style.bgBrightYellow]: [103, RESET_BG_COLOR],
  [Style.bgBrightBlue]: [104, RESET_BG_COLOR],
  [Style.bgBrightMagenta]: [105, RESET_BG_COLOR],
  [Style.bgBrightCyan]: [106, RESET_BG_COLOR],
  [Style.bgBrightWhite]: [107, RESET_BG_COLOR],
}
