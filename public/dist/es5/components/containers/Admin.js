"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var Admin = (function (Component) {
    function Admin() {
        _classCallCheck(this, Admin);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Admin, Component);

    _prototypeProperties(Admin, null, {
        render: {
            value: function render() {
                var currentUser = this.props.user.currentUser;

                return React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "h2",
                        null,
                        "This is the Admin Component!"
                    ),
                    currentUser == null ? "No Current User" : React.createElement(
                        "div",
                        null,
                        currentUser.username
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Admin;
})(Component);

var stateToProps = function (state) {
    return {
        user: state.user
    };
};

module.exports = connect(stateToProps)(Admin);