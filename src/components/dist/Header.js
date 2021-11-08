"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Header() {
    var _a = react_1.useState(false), showMenu = _a[0], setShowMenu = _a[1];
    var _b = react_1.useState(false), lightTheme = _b[0], setLightTheme = _b[1];
    react_1.useEffect(function () {
        document.body.classList.toggle("dark-theme", lightTheme);
    }, [lightTheme]);
    return (React.createElement("header", { className: "header", id: "header" },
        React.createElement("nav", { className: "nav container" },
            React.createElement("a", { href: "/#", className: "nav__logo" }, "Michael"),
            React.createElement("div", { className: !showMenu ? "nav__menu" : "nav__menu show-menu", id: "nav-menu" },
                React.createElement("ul", { className: "nav__list grid" },
                    React.createElement("li", { className: "nav__item" },
                        React.createElement("a", { href: "/#home", className: "nav__link active-link", onClick: function () { return setShowMenu(!showMenu); } },
                            React.createElement("i", { className: "uil uil-estate nav__icon" }),
                            " Home")),
                    React.createElement("li", { className: "nav__item" },
                        React.createElement("a", { href: "/#about", className: "nav__link", onClick: function () { return setShowMenu(!showMenu); } },
                            React.createElement("i", { className: "uil uil-user nav__icon" }),
                            " About")),
                    React.createElement("li", { className: "nav__item" },
                        React.createElement("a", { href: "/#skills", className: "nav__link", onClick: function () { return setShowMenu(!showMenu); } },
                            React.createElement("i", { className: "uil uil-file-alt nav__icon" }),
                            " Skills")),
                    React.createElement("li", { className: "nav__item" },
                        React.createElement("a", { href: "/#qualification", className: "nav__link", onClick: function () { return setShowMenu(!showMenu); } },
                            React.createElement("i", { className: "uil uil-scenery nav__icon" }),
                            " Qualification")),
                    React.createElement("li", { className: "nav__item" },
                        React.createElement("a", { href: "/#portfolio", className: "nav__link", onClick: function () { return setShowMenu(!showMenu); } },
                            React.createElement("i", { className: "uil uil-scenery nav__icon" }),
                            " Portfolio")),
                    React.createElement("li", { className: "nav__item" },
                        React.createElement("a", { href: "/#contact", className: "nav__link", onClick: function () { return setShowMenu(!showMenu); } },
                            React.createElement("i", { className: "uil uil-message nav__icon" }),
                            " Contactme"))),
                React.createElement("i", { className: "uil uil-times nav__close", id: "nav-close", onClick: function () { return setShowMenu(!showMenu); } })),
            React.createElement("div", { className: "nav__btns" },
                React.createElement("i", { className: !lightTheme
                        ? "uil uil-moon change-theme"
                        : "uil uil-moon change-theme uil-sun", id: "theme-button", onClick: function () { return setLightTheme(!lightTheme); } }),
                React.createElement("div", { className: "nav__toggle", id: "nav-toggle", onClick: function () { return setShowMenu(!showMenu); } },
                    React.createElement("i", { className: "uil uil-apps" }))))));
}
exports["default"] = Header;
