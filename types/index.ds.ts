export enum StyleOpt {
  reset = 'reset',
  bold = 'bold',
  dim = 'dim',
  italic = 'italic',
  underline = 'underline',
  inverse = 'inverse',
  hidden = 'hidden',
  strikethrough = 'strikethrough',
  black = 'black',
  red = 'red',
  green = 'green',
  yellow = 'yellow',
  blue = 'blue',
  magenta = 'magenta',
  cyan = 'cyan',
  white = 'white',
  gray = 'gray',
  grey = 'grey',
  brightRed = 'brightRed',
  brightGreen = 'brightGreen',
  brightYellow = 'brightYellow',
  brightBlue = 'brightBlue',
  brightMagenta = 'brightMagenta',
  brightCyan = 'brightCyan',
  brightWhite = 'brightWhite',
  bgBlack = 'bgBlack',
  bgRed = 'bgRed',
  bgGreen = 'bgGreen',
  bgYellow = 'bgYellow',
  bgBlue = 'bgBlue',
  bgMagenta = 'bgMagenta',
  bgCyan = 'bgCyan',
  bgWhite = 'bgWhite',
  bgGray = 'bgGray',
  bgGrey = 'bgGrey',
  bgBrightRed = 'bgBrightRed',
  bgBrightGreen = 'bgBrightGreen',
  bgBrightYellow = 'bgBrightYellow',
  bgBrightBlue = 'bgBrightBlue',
  bgBrightMagenta = 'bgBrightMagenta',
  bgBrightCyan = 'bgBrightCyan',
  bgBrightWhite = 'bgBrightWhite',
}

export type StyleType = {
  [key: string]: number[];
}

export interface StyleInterfaceRes {
  open: string;
  close: string;
  style?: string;
}

export type StyleInterface = (style: string) => StyleInterfaceRes;

export type ToColorInterface = (msg: string, style: string) => string;

export enum LogType {
  notice = 'notice',
  info = 'info',
  warn = 'warn',
  err = 'err',
  fail = 'fail',
  success = 'success',
  ok = 'ok',
}

export type PrintInterface = (msg: string, type: string, dump?: boolean) => () => string;
