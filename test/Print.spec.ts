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
    delete process.env.LOG_LEVEL
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

  test('should log all levels when LOG_LEVEL is debug', () => {
    process.env.LOG_LEVEL = 'debug'

    const instance = new Printer('test')

    instance.debug()
    instance.info()
    instance.warn()
    instance.err()
    instance.ok()

    expect(logSpy).toHaveBeenCalledTimes(5)
  })

  test('should log from info to ok when LOG_LEVEL is info', () => {
    process.env.LOG_LEVEL = 'info'

    const instance = new Printer('test')

    instance.debug()
    instance.info()
    instance.warn()
    instance.err()
    instance.ok()

    expect(logSpy).toHaveBeenCalledTimes(4)
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringMatching(/DEBUG/), undefined)
  })

  test('should log from warn to ok when LOG_LEVEL is warn', () => {
    process.env.LOG_LEVEL = 'warn'

    const instance = new Printer('test')

    instance.debug()
    instance.info()
    instance.warn()
    instance.err()
    instance.ok()

    expect(logSpy).toHaveBeenCalledTimes(3)
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringMatching(/DEBUG/), undefined)
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringMatching(/INFO/), undefined)
  })

  test('should only log err and ok when LOG_LEVEL is err', () => {
    process.env.LOG_LEVEL = 'err'

    const instance = new Printer('test')

    instance.debug()
    instance.info()
    instance.warn()
    instance.err()
    instance.ok()

    expect(logSpy).toHaveBeenCalledTimes(2)
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringMatching(/DEBUG/), undefined)
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringMatching(/INFO/), undefined)
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringMatching(/WARN/), undefined)
  })

  test('should default to debug if no LOG_LEVEL is set', () => {
    const instance = new Printer('test')

    instance.debug()

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/DEBUG/), undefined)
  })
})
