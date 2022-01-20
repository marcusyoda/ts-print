import { LogType } from '../types/index.ds';
export var now = function () { return (new Date()).toLocaleDateString(); };
/**
 * @param type
 */
export var groupByType = function (type) {
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
export var br = function () { return console.log(''); };
//# sourceMappingURL=helpers.js.map