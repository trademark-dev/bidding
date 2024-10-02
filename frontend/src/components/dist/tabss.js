// Tabss.tsx
"use client";
"use strict";
exports.__esModule = true;
exports.Tabss = void 0;
var tabs_1 = require("@/components/ui/tabs");
var coundown_1 = require("@/components/coundown");
function Tabss() {
    return (React.createElement("div", { className: "tabs_wrape" },
        React.createElement(tabs_1.Tabs, { defaultValue: "account", className: "", style: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            } },
            React.createElement(tabs_1.TabsList, { className: "tabs_names", style: {
                    minWidth: "16%",
                    margin: "0 auto",
                    backgroundColor: "#ffffff4f",
                    backdropFilter: "blur(27px)",
                    gap: "10px",
                    paddingTop: "0.3rem",
                    paddingBottom: "0.3rem",
                    height: "48px !important"
                } },
                React.createElement(tabs_1.TabsTrigger, { style: {
                        zIndex: "6",
                        color: "white"
                    }, value: "account" }, "Bid To Buy"),
                React.createElement(tabs_1.TabsTrigger, { style: {
                        zIndex: "6",
                        color: "white"
                    }, value: "password" }, "Unique bidding")),
            React.createElement(tabs_1.TabsContent, { style: { marginTop: "4rem", paddingBottom: '5rem' }, value: "account" },
                React.createElement("div", { style: {
                        gap: "3rem 1rem"
                    }, className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4" },
                    React.createElement("div", { className: "relative flex flex-col cards_bid_to_buy" },
                        React.createElement("div", { className: "relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 inner_image_card" },
                            React.createElement("img", { src: "/assets/images/42313962.jpg", alt: "Car Image" })),
                        React.createElement("div", { className: "p-6" },
                            React.createElement("h5", { className: "cart_title_j mb-3 block leading-snug tracking-normal antialiased" }, "2012 Suzuki Swift Sport FZ CVT Hatchback"),
                            React.createElement(coundown_1["default"], { targetDate: "2024-10-03 1:31:00" })),
                        React.createElement("div", { className: "p-2 px-8" },
                            React.createElement("h5", { className: "cart_title_js mb-2" },
                                React.createElement("i", { className: "fa-solid fa-dollar-sign" }),
                                " 2,200")),
                        React.createElement("div", { className: "p-6 pt-0" },
                            React.createElement("button", { "data-ripple-light": "true", type: "button", className: "variant_button button_to_next_bid_page" },
                                "Click TO Bid ",
                                React.createElement("i", { className: "ri-arrow-right-s-line" })))))),
            React.createElement(tabs_1.TabsContent, { value: "password" }))));
}
exports.Tabss = Tabss;
