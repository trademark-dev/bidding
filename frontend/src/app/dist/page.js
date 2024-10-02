"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Navbar_1 = require("@/components/Navbar");
var floating_bottom_nav_1 = require("@/components/floating-bottom-nav");
var hero_slider_1 = require("@/components/hero-slider");
var tabss_1 = require("@/components/tabss");
function Page() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Navbar_1.NavbarDemo, null),
        react_1["default"].createElement(hero_slider_1.CarouselHerro, null),
        react_1["default"].createElement(tabss_1.Tabss, null),
        react_1["default"].createElement(floating_bottom_nav_1.FloatingDockNav, null)));
}
exports["default"] = Page;
