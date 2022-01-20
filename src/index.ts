import {br as breakLine, groupByType, now} from './helpers';
import IPrint, {StyleOpt} from './index.ds';
import toStyle from './toStyles';

export const Print: IPrint = (msg = '') => ({
  exec(type: string, dump = true) {
    const groupText: string = groupByType(type);

    let colorGroup: string = StyleOpt.green;
    let colorDate: string = StyleOpt.brightGreen;
    let colorMsg: string = StyleOpt.white;

    switch (type) {
      case 'ok':
      case 'success':
        colorGroup = StyleOpt.green;
        colorDate = StyleOpt.brightGreen;
        colorMsg = StyleOpt.white;
        break;
      case 'warn':
        colorGroup = StyleOpt.yellow;
        colorDate = StyleOpt.grey;
        colorMsg = StyleOpt.white;
        break;
      case 'err':
      case 'fail':
        colorGroup = StyleOpt.red;
        colorDate = StyleOpt.magenta;
        colorMsg = StyleOpt.white;
        break;
      case 'info':
      case 'notice':
        colorGroup = StyleOpt.blue;
        colorDate = StyleOpt.cyan;
        colorMsg = StyleOpt.white;
        break;
    }

    const group: string = toStyle(toStyle(toStyle(toStyle(groupText, colorGroup), StyleOpt.bold), 'bold'), 'black');
    const dateTime: string = toStyle(toStyle(now(), colorDate), StyleOpt.italic);
    const mensagem: string = toStyle(toStyle(msg.toUpperCase().trim(), colorMsg), StyleOpt.bold);

    const out = `[${group}] - ${dateTime} - ${mensagem}`;
    const outWithColors = `[${group}]  - ${dateTime} - ${mensagem}`;

    if (dump) {
      console.log(outWithColors);
    }

    return out;
  },
  toStyle(style: string) {
    console.log(toStyle(msg, style))
    return msg;
  },
  br() {
    breakLine();
  },
  ok(dump = true) {
    return Print(msg).exec('ok', dump);
  },
  success(dump = true) {
    return Print(msg).exec('success', dump);
  },
  warn(dump = true) {
    return Print(msg).exec('warn', dump);
  },
  err(dump = true) {
    return Print(msg).exec('err', dump);
  },
  fail(dump = true) {
    return Print(msg).exec('fail', dump);
  },
  notice(dump = true) {
    return Print(msg).exec('notice', dump);
  },
  info(dump = true) {
    return Print(msg).exec('info', dump);
  },
  dump() {
    console.log(msg);
    return msg;
  },
});
