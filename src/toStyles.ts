import Styles from './styles'
import { StyleInterface, ToColorInterface } from './index.ds'

/**
 * @param color
 * @constructor
 */
export const GetStyle: StyleInterface = (color: string) => {
  const val: number[] = Styles[color]
  return { open: `\u001b[${val[0]}m`, close: `\u001b[${val[1]}m`, color }
}

/**
 * @param msg
 * @param style
 */
export const toStyle: ToColorInterface = (msg: string, style: string): string => {
  const { open, close } = GetStyle(style)
  return `${open}${msg}${close}`
}

export default toStyle
