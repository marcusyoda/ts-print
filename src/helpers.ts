import {LogType} from '../types/index.ds';

export const now = (): string => (new Date()).toLocaleDateString();

/**
 * @param type
 */
export const groupByType = (type: string): string => {
  switch (type) {
    case (LogType.fail):
      return 'FALHA';
    case (LogType.err):
      return 'ERRO';
    case (LogType.warn):
      return 'ALERTA';
    case (LogType.info):
      return 'INFORMAÇÃO';
    case (LogType.notice):
      return 'NOTÍCIA';
    case (LogType.success):
      return 'SUCESSO';
    case (LogType.ok):
      return 'OK';
  }
  return type;
};

export const br = () => console.log('');
