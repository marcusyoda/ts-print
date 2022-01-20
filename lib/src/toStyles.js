import Styles from './styles';
/**
 * @param color
 * @constructor
 */
export var GetStyle = function (color) {
    var val = Styles[color];
    return { open: "\u001B[".concat(val[0], "m"), close: "\u001B[".concat(val[1], "m"), color: color };
};
/**
 * @param msg
 * @param style
 */
export var toStyle = function (msg, style) {
    var _a = GetStyle(style), open = _a.open, close = _a.close;
    return "".concat(open).concat(msg).concat(close);
};
export default toStyle;
//# sourceMappingURL=toStyles.js.map