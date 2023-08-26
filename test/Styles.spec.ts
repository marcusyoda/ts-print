import { Style } from '../src/types'
import { styles } from '../src/styles'

describe('Styles object', () => {
  test('should have correct mappings for each style', () => {
    const styleKeys = Object.values(Style)

    styleKeys.forEach(styleKey => {
      expect(styles).toHaveProperty(styleKey)
      expect(styles[styleKey]).toBeInstanceOf(Array)
      expect(styles[styleKey].length).toBe(2)
      expect(styles[styleKey][0]).toBeGreaterThanOrEqual(0)
      expect(styles[styleKey][1]).toBeGreaterThanOrEqual(0)
    })
  })

  test('background colors should have correct reset values', () => {
    const bgColorStyles = [Style.bgBlack, Style.bgBlue, Style.bgBrightBlue, Style.bgBrightCyan, Style.bgBrightGreen, Style.bgBrightMagenta, Style.bgBrightRed, Style.bgBrightWhite, Style.bgBrightYellow, Style.bgCyan, Style.bgGray, Style.bgGreen, Style.bgGrey, Style.bgMagenta, Style.bgRed, Style.bgWhite, Style.bgYellow]

    bgColorStyles.forEach(styleKey => {
      expect(styles[styleKey][1]).toBe(49)
    })
  })

  test('background colors should have correct reset values', () => {
    const bgColorStyles = [Style.black, Style.red, Style.green, Style.yellow, Style.blue, Style.magenta, Style.cyan, Style.white, Style.gray, Style.grey, Style.brightRed, Style.brightGreen, Style.brightYellow, Style.brightBlue, Style.brightMagenta, Style.brightCyan, Style.brightWhite]

    bgColorStyles.forEach(styleKey => {
      expect(styles[styleKey][1]).toBe(39)
    })
  })
})
