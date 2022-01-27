'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var StyleOpt;
(function (StyleOpt) {
    StyleOpt["reset"] = "reset";
    StyleOpt["bold"] = "bold";
    StyleOpt["dim"] = "dim";
    StyleOpt["italic"] = "italic";
    StyleOpt["underline"] = "underline";
    StyleOpt["inverse"] = "inverse";
    StyleOpt["hidden"] = "hidden";
    StyleOpt["strikethrough"] = "strikethrough";
    StyleOpt["black"] = "black";
    StyleOpt["red"] = "red";
    StyleOpt["green"] = "green";
    StyleOpt["yellow"] = "yellow";
    StyleOpt["blue"] = "blue";
    StyleOpt["magenta"] = "magenta";
    StyleOpt["cyan"] = "cyan";
    StyleOpt["white"] = "white";
    StyleOpt["gray"] = "gray";
    StyleOpt["grey"] = "grey";
    StyleOpt["brightRed"] = "brightRed";
    StyleOpt["brightGreen"] = "brightGreen";
    StyleOpt["brightYellow"] = "brightYellow";
    StyleOpt["brightBlue"] = "brightBlue";
    StyleOpt["brightMagenta"] = "brightMagenta";
    StyleOpt["brightCyan"] = "brightCyan";
    StyleOpt["brightWhite"] = "brightWhite";
    StyleOpt["bgBlack"] = "bgBlack";
    StyleOpt["bgRed"] = "bgRed";
    StyleOpt["bgGreen"] = "bgGreen";
    StyleOpt["bgYellow"] = "bgYellow";
    StyleOpt["bgBlue"] = "bgBlue";
    StyleOpt["bgMagenta"] = "bgMagenta";
    StyleOpt["bgCyan"] = "bgCyan";
    StyleOpt["bgWhite"] = "bgWhite";
    StyleOpt["bgGray"] = "bgGray";
    StyleOpt["bgGrey"] = "bgGrey";
    StyleOpt["bgBrightRed"] = "bgBrightRed";
    StyleOpt["bgBrightGreen"] = "bgBrightGreen";
    StyleOpt["bgBrightYellow"] = "bgBrightYellow";
    StyleOpt["bgBrightBlue"] = "bgBrightBlue";
    StyleOpt["bgBrightMagenta"] = "bgBrightMagenta";
    StyleOpt["bgBrightCyan"] = "bgBrightCyan";
    StyleOpt["bgBrightWhite"] = "bgBrightWhite";
})(StyleOpt || (StyleOpt = {}));
var LogType;
(function (LogType) {
    LogType["notice"] = "notice";
    LogType["info"] = "info";
    LogType["warn"] = "warn";
    LogType["err"] = "err";
    LogType["fail"] = "fail";
    LogType["success"] = "success";
    LogType["ok"] = "ok";
})(LogType || (LogType = {}));

var now = function () {
    var date = new Date();
    if (process.env.TS_PRINT_ONLY_DATE) {
        return date.toLocaleDateString();
    }
    return "".concat(date.toLocaleDateString(), "-").concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds());
};
/**
 * @param type
 */
var groupByType = function (type) {
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
var br = function () { return console.log(''); };

var _a;
var Styles = (_a = {},
    _a[StyleOpt.reset] = [0, 0],
    _a[StyleOpt.bold] = [1, 22],
    _a[StyleOpt.dim] = [2, 22],
    _a[StyleOpt.italic] = [3, 23],
    _a[StyleOpt.underline] = [4, 24],
    _a[StyleOpt.inverse] = [7, 27],
    _a[StyleOpt.hidden] = [8, 28],
    _a[StyleOpt.strikethrough] = [9, 29],
    _a[StyleOpt.black] = [30, 39],
    _a[StyleOpt.red] = [31, 39],
    _a[StyleOpt.green] = [32, 39],
    _a[StyleOpt.yellow] = [33, 39],
    _a[StyleOpt.blue] = [34, 39],
    _a[StyleOpt.magenta] = [35, 39],
    _a[StyleOpt.cyan] = [36, 39],
    _a[StyleOpt.white] = [37, 39],
    _a[StyleOpt.gray] = [90, 39],
    _a[StyleOpt.grey] = [90, 39],
    _a[StyleOpt.brightRed] = [91, 39],
    _a[StyleOpt.brightGreen] = [92, 39],
    _a[StyleOpt.brightYellow] = [93, 39],
    _a[StyleOpt.brightBlue] = [94, 39],
    _a[StyleOpt.brightMagenta] = [95, 39],
    _a[StyleOpt.brightCyan] = [96, 39],
    _a[StyleOpt.brightWhite] = [97, 39],
    _a[StyleOpt.bgBlack] = [40, 49],
    _a[StyleOpt.bgRed] = [41, 49],
    _a[StyleOpt.bgGreen] = [42, 49],
    _a[StyleOpt.bgYellow] = [43, 49],
    _a[StyleOpt.bgBlue] = [44, 49],
    _a[StyleOpt.bgMagenta] = [45, 49],
    _a[StyleOpt.bgCyan] = [46, 49],
    _a[StyleOpt.bgWhite] = [47, 49],
    _a[StyleOpt.bgGray] = [100, 49],
    _a[StyleOpt.bgGrey] = [100, 49],
    _a[StyleOpt.bgBrightRed] = [101, 49],
    _a[StyleOpt.bgBrightGreen] = [102, 49],
    _a[StyleOpt.bgBrightYellow] = [103, 49],
    _a[StyleOpt.bgBrightBlue] = [104, 49],
    _a[StyleOpt.bgBrightMagenta] = [105, 49],
    _a[StyleOpt.bgBrightCyan] = [106, 49],
    _a[StyleOpt.bgBrightWhite] = [107, 49],
    _a);

/**
 * @param color
 * @constructor
 */
var GetStyle = function (color) {
    var val = Styles[color];
    return { open: "\u001B[".concat(val[0], "m"), close: "\u001B[".concat(val[1], "m"), color: color };
};
/**
 * @param msg
 * @param style
 */
var toStyle = function (msg, style) {
    var _a = GetStyle(style), open = _a.open, close = _a.close;
    return "".concat(open).concat(msg).concat(close);
};

var Print = function (msg) {
    if (msg === void 0) { msg = ''; }
    return ({
        exec: function (type, dump) {
            if (dump === void 0) { dump = true; }
            var groupText = groupByType(type);
            var colorGroup = StyleOpt.green;
            var colorDate = StyleOpt.brightGreen;
            var colorMsg = StyleOpt.white;
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
            var group = toStyle(toStyle(toStyle(toStyle(groupText, colorGroup), StyleOpt.bold), 'bold'), 'black');
            var dateTime = toStyle(toStyle(now(), colorDate), StyleOpt.italic);
            var mensagem = toStyle(toStyle(msg.toUpperCase().trim(), colorMsg), StyleOpt.bold);
            var out = "[".concat(group, "] - ").concat(dateTime, " - ").concat(mensagem);
            var outWithColors = "[".concat(group, "]  - ").concat(dateTime, " - ").concat(mensagem);
            if (dump) {
                console.log(outWithColors);
            }
            return out;
        },
        toStyle: function (style) {
            console.log(toStyle(msg, style));
            return msg;
        },
        br: function () {
            br();
        },
        ok: function (dump) {
            if (dump === void 0) { dump = true; }
            return Print(msg).exec('ok', dump);
        },
        success: function (dump) {
            if (dump === void 0) { dump = true; }
            return Print(msg).exec('success', dump);
        },
        warn: function (dump) {
            if (dump === void 0) { dump = true; }
            return Print(msg).exec('warn', dump);
        },
        err: function (dump) {
            if (dump === void 0) { dump = true; }
            return Print(msg).exec('err', dump);
        },
        fail: function (dump) {
            if (dump === void 0) { dump = true; }
            return Print(msg).exec('fail', dump);
        },
        notice: function (dump) {
            if (dump === void 0) { dump = true; }
            return Print(msg).exec('notice', dump);
        },
        info: function (dump) {
            if (dump === void 0) { dump = true; }
            return Print(msg).exec('info', dump);
        },
        dump: function () {
            console.log(msg);
            return msg;
        },
    });
};

exports.Print = Print;
