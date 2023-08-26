import { applyStyle, groupByType, now } from './helpers'

import { IPrint, IPrinter, LogType, PrinterOptions, PrinterTransport, Style } from './types'

export class Printer implements IPrinter {
  private message: string

  private meta?: unknown

  private dumpDate: boolean

  private transporter: PrinterTransport

  constructor(message: string, meta?: unknown, options?: PrinterOptions) {
    this.message = message
    this.meta = meta

    this.dumpDate = options?.dumpDate ?? false
    this.transporter = options?.transporter ?? console.log
  }

  private dump(type: LogType): void {
    const { name, colorGroup, colorDate, colorMsg } = groupByType(type)

    const group: string = applyStyle(name, colorGroup, Style.bold, Style.black)
    const dateTime: string = this.dumpDate ? applyStyle(now(), colorDate, Style.italic) : ''
    const message: string = applyStyle(this.message.toUpperCase().trim(), colorMsg, Style.bold)

    const out = this.dumpDate ? `${group} ${dateTime} - ${message}` : `${group} - ${message}`

    this.transporter(out, this.meta)
  }

  br() {
    this.transporter('\n')
  }

  ok() {
    this.dump(LogType.ok)
  }

  warn() {
    this.dump(LogType.warn)
  }

  err() {
    this.dump(LogType.err)
  }

  info() {
    this.dump(LogType.info)
  }

  debug() {
    this.dump(LogType.debug)
  }
}

export const Print: IPrint = (message: string, meta?: unknown, options?: PrinterOptions): Printer => {
  return new Printer(message, meta, options)
}
