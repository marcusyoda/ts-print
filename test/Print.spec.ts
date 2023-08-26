import { Print, Printer } from '../src/index'

describe('Print function', () => {
  test('should return an instance of Printer class', () => {
    const instance = Print('test')
    expect(instance).toBeInstanceOf(Printer)
  })
})

describe('Printer class', () => {
  let logSpy: jest.SpyInstance

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation()
  })

  afterEach(() => {
    logSpy.mockRestore()
  })

  test('should have default options when instantiated', () => {
    const instance = new Printer('test')
    instance.ok()

    expect(logSpy).toHaveBeenCalledWith(expect.any(String), undefined)
  })

  test('should overwrite default options with provided options', () => {
    const customTransporter = jest.fn()

    const instance = new Printer('test', {}, { dumpDate: true, transporter: customTransporter })
    instance.ok()

    expect(customTransporter).toHaveBeenCalledWith(expect.any(String), {})
  })

  test('ok method should log with OK style', () => {
    const instance = new Printer('test')
    instance.ok()

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/OK/), undefined)
  })

  test('warn method should log with WARN style', () => {
    const instance = new Printer('test')
    instance.warn()

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/WARN/), undefined)
  })

  test('err method should log with ERR style', () => {
    const instance = new Printer('test')
    instance.err()

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/ERR/), undefined)
  })

  test('info method should log with INFO style', () => {
    const instance = new Printer('test')
    instance.info()

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/INFO/), undefined)
  })

  test('debug method should log with DEBUG style', () => {
    const instance = new Printer('test')
    instance.debug()

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/DEBUG/), undefined)
  })

  test('br method should log a newline', () => {
    const instance = new Printer('test')
    instance.br()

    expect(logSpy).toHaveBeenCalledWith('\n')
  })
})
