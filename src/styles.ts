import {StyleType, StyleOpt} from './index.ds';

export const Styles: StyleType = {
  [StyleOpt.reset]: [0, 0],

  [StyleOpt.bold]: [1, 22],
  [StyleOpt.dim]: [2, 22],
  [StyleOpt.italic]: [3, 23],
  [StyleOpt.underline]: [4, 24],
  [StyleOpt.inverse]: [7, 27],
  [StyleOpt.hidden]: [8, 28],
  [StyleOpt.strikethrough]: [9, 29],

  [StyleOpt.black]: [30, 39],
  [StyleOpt.red]: [31, 39],
  [StyleOpt.green]: [32, 39],
  [StyleOpt.yellow]: [33, 39],
  [StyleOpt.blue]: [34, 39],
  [StyleOpt.magenta]: [35, 39],
  [StyleOpt.cyan]: [36, 39],
  [StyleOpt.white]: [37, 39],
  [StyleOpt.gray]: [90, 39],
  [StyleOpt.grey]: [90, 39],

  [StyleOpt.brightRed]: [91, 39],
  [StyleOpt.brightGreen]: [92, 39],
  [StyleOpt.brightYellow]: [93, 39],
  [StyleOpt.brightBlue]: [94, 39],
  [StyleOpt.brightMagenta]: [95, 39],
  [StyleOpt.brightCyan]: [96, 39],
  [StyleOpt.brightWhite]: [97, 39],

  [StyleOpt.bgBlack]: [40, 49],
  [StyleOpt.bgRed]: [41, 49],
  [StyleOpt.bgGreen]: [42, 49],
  [StyleOpt.bgYellow]: [43, 49],
  [StyleOpt.bgBlue]: [44, 49],
  [StyleOpt.bgMagenta]: [45, 49],
  [StyleOpt.bgCyan]: [46, 49],
  [StyleOpt.bgWhite]: [47, 49],
  [StyleOpt.bgGray]: [100, 49],
  [StyleOpt.bgGrey]: [100, 49],

  [StyleOpt.bgBrightRed]: [101, 49],
  [StyleOpt.bgBrightGreen]: [102, 49],
  [StyleOpt.bgBrightYellow]: [103, 49],
  [StyleOpt.bgBrightBlue]: [104, 49],
  [StyleOpt.bgBrightMagenta]: [105, 49],
  [StyleOpt.bgBrightCyan]: [106, 49],
  [StyleOpt.bgBrightWhite]: [107, 49],
};

export default Styles;
