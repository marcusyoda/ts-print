import { now, groupByType, getStyle, applyStyle } from '../src/helpers'
import { LogType } from '../src/types'

describe('Helpers', () => {
  describe('now function', () => {
    test('should return correctly formatted date and time', () => {
      const result = now()
      expect(result).toMatch(/^\d{1,2}\/\d{1,2}\/\d{4}-\d{2}:\d{2}:\d{2}$/)
    })

    test('should return only the date when TS_PRINT_ONLY_DATE is set', () => {
      process.env.TS_PRINT_ONLY_DATE = 'true'
      const result = now()
      expect(result).toMatch(/^\d{1,2}\/\d{1,2}\/\d{4}$/)
      delete process.env.TS_PRINT_ONLY_DATE
    })
  })

  describe('groupByType function', () => {
    test('should return correct LogTypeResponse for each log type', () => {
      expect(groupByType(LogType.ok).name).toBe('OK')
      expect(groupByType(LogType.warn).name).toBe('WARN')
    })

    test('should default to INFO when unknown type is provided', () => {
      const unknownType = 'random' as LogType
      expect(groupByType(unknownType).name).toBe('INFO')
    })
  })

  describe('getStyle function', () => {
    test('should return correct style structure for a given color', () => {
      const result = getStyle('green')
      expect(result).toHaveProperty('open')
      expect(result).toHaveProperty('close')
      expect(result.color).toBe('green')
    })
  })

  describe('applyStyle function', () => {
    test('should apply style correctly to a message', () => {
      const styledMsg = applyStyle('test message', 'green')
      const { open, close } = getStyle('green')
      expect(styledMsg).toBe(`${open}test message${close}`)
    })
  })
})
