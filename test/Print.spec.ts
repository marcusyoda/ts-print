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

    expect(logSpy).toHaveBeenCalledWith(expect.any(String), '')
  })

  test('should overwrite default options with provided options', () => {
    const customTransporter = jest.fn()

    const instance = new Printer('test', {}, { dumpDate: true, transporter: customTransporter })
    instance.ok()

    expect(customTransporter).toHaveBeenCalledWith(expect.any(String), {})
  })

  test('ok method should log with ok style', () => {
    const instance = new Printer('test')
    instance.ok()

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/ok/), '')
  })

  test('warn method should log with warn style', () => {
    const instance = new Printer('test')
    instance.warn()

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/warn/), '')
  })

  test('err method should log with err style', () => {
    const instance = new Printer('test')
    instance.err()

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/err/), '')
  })

  test('info method should log with info style', () => {
    const instance = new Printer('test')
    instance.info()

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/info/), '')
  })

  test('debug method should log with debug style', () => {
    const instance = new Printer('test')
    instance.debug()

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/debug/), '')
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
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringMatching(/debug/), '')
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
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringMatching(/debug/), '')
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringMatching(/info/), '')
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
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringMatching(/debug/), '')
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringMatching(/info/), '')
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringMatching(/warn/), '')
  })

  test('should default to debug if no LOG_LEVEL is set', () => {
    const instance = new Printer('test')

    instance.debug()

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/debug/), '')
  })
})
