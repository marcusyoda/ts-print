export enum Style {
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

export type Styles = {
  [key: string]: number[]
}

export interface StyleResponse {
  open: string
  close: string
  color?: string
}

export enum LogType {
  ok = 'ok',
  warn = 'warn',
  err = 'err',
  info = 'info',
  debug = 'debug',
}

export type LogTypeResponse = {
  name: string
  colorGroup: string
  colorDate: string
  colorMsg: string
}

export enum LogLevel {
  debug = 1,
  info = 2,
  warn = 3,
  err = 4,
  ok = 5,
}

export type PrinterTransport = (message: string, meta?: unknown) => void

export type PrinterOptions = {
  dumpDate?: boolean
  transporter?: PrinterTransport
}

export interface IPrinter {
  br: () => void
  ok: () => void
  warn: () => void
  err: () => void
  info: () => void
  debug: () => void
}

export type IPrint = (message: string, meta?: unknown, options?: PrinterOptions) => IPrinter
