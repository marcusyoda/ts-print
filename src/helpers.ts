import { styles } from './styles'

import { LogType, LogTypeResponse, Style, StyleResponse } from './types'

export const now = (): string => {
  const date = new Date()

  if (process.env.TS_PRINT_ONLY_DATE) {
    return date.toLocaleDateString()
  }

  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  return `${date.toLocaleDateString()}-${hours}:${minutes}:${seconds}`
}

const LOG_TYPE_MAP: { [key in LogType]: LogTypeResponse } = {
  [LogType.ok]: {
    name: 'OK',
    colorGroup: Style.green,
    colorDate: Style.brightGreen,
    colorMsg: Style.white,
  },
  [LogType.warn]: {
    name: 'WARN',
    colorGroup: Style.yellow,
    colorDate: Style.grey,
    colorMsg: Style.white,
  },
  [LogType.err]: {
    name: 'ERR',
    colorGroup: Style.red,
    colorDate: Style.magenta,
    colorMsg: Style.white,
  },
  [LogType.info]: {
    name: 'INFO',
    colorGroup: Style.blue,
    colorDate: Style.cyan,
    colorMsg: Style.white,
  },
  [LogType.debug]: {
    name: 'DEBUG',
    colorGroup: Style.cyan,
    colorDate: Style.blue,
    colorMsg: Style.white,
  },
}

export const groupByType = (type: LogType): LogTypeResponse => {
  return LOG_TYPE_MAP[type] ?? LOG_TYPE_MAP[LogType.info]
}

export const getStyle = (color: string): StyleResponse => {
  const val: number[] = styles[color]

  return { open: `\u001b[${val[0]}m`, close: `\u001b[${val[1]}m`, color }
}

export const applyStyle = (msg: string, ...styles: string[]): string => {
  for (const style of styles) {
    const { open, close } = getStyle(style)
    msg = `${open}${msg}${close}`
  }
  return msg
}
