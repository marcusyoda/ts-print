import {LogType, stringFunction, voidFunction} from './index.ds';

export const now = (): string => (new Date()).toLocaleDateString();

/**
 * @param type
 */
export const groupByType: stringFunction = (type: string): string => {
  switch (type) {
    case (LogType.fail):
      return 'FAIL';
    case (LogType.err):
      return 'ERR';
    case (LogType.warn):
      return 'ALERT';
    case (LogType.info):
      return 'INFO';
    case (LogType.notice):
      return 'NOTICE';
    case (LogType.success):
      return 'SUCCESS';
    case (LogType.ok):
      return 'OK';
  }
  return type;
};

export const br: voidFunction = () => console.log('');
