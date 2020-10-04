"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
require("./guide.css");
var Guide = /** @class */ (function (_super) {
    __extends(Guide, _super);
    function Guide(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            var _a = _this.state, index = _a.index, len = _a.len;
            var _b = _this.props.guideList, guideList = _b === void 0 ? [] : _b;
            var onClick = (guideList && guideList[0] || {}).onClick;
            if (typeof onClick === "function") {
                onClick(index);
            }
            var nextIndex = index + 1;
            _this.setState({ index: nextIndex });
            if (nextIndex === len) {
                guide.hide();
            }
        };
        var _a = _this.props.guideList, guideList = _a === void 0 ? [] : _a;
        _this.state = {
            index: 0,
            len: guideList.length,
        };
        return _this;
    }
    Guide.prototype.render = function () {
        var _a = this.props.guideList, guideList = _a === void 0 ? [] : _a;
        var item = guideList && guideList[this.state.index] || {};
        return (React.createElement(React.Fragment, null,
            item.node,
            React.createElement("div", { className: "guide-btn-wrap" },
                React.createElement("p", { onClick: this.handleClick, className: "guide-btn-action" }, item.btnText))));
    };
    return Guide;
}(React.Component));
var node = null;
var guide = {
    show: function (list) {
        node = document.createElement("div");
        document.body.appendChild(node);
        node.className = "guide-wrap";
        ReactDOM.render(React.createElement(Guide, { guideList: list }), node);
    },
    hide: function () {
        if (!node) {
            return;
        }
        ReactDOM.unmountComponentAtNode(node);
        document.body.removeChild(node);
        node = null;
    },
};
exports.default = guide;
//# sourceMappingURL=guide.js.map