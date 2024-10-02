"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CountdownTimer = function (_a) {
    var targetDate = _a.targetDate;
    var _b = react_1.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }), timeLeft = _b[0], setTimeLeft = _b[1];
    var _c = react_1.useState(false), isTimeUp = _c[0], setIsTimeUp = _c[1];
    var _d = react_1.useState('AM'), period = _d[0], setPeriod = _d[1]; // State for AM/PM
    react_1.useEffect(function () {
        var countDownDate = new Date(targetDate).getTime();
        var interval = setInterval(function () {
            var now = new Date().getTime();
            var difference = countDownDate - now;
            var days = Math.floor(difference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);
            // Update the period (AM/PM)
            if (hours >= 12) {
                setPeriod('PM');
            }
            else {
                setPeriod('AM');
            }
            if (difference > 0) {
                // Adjust hours to 12-hour format
                var adjustedHours = hours % 12 || 12; // Convert 0 to 12
                setTimeLeft({ days: days, hours: adjustedHours, minutes: minutes, seconds: seconds });
            }
            else {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setIsTimeUp(true);
            }
        }, 1000);
        return function () { return clearInterval(interval); };
    }, [targetDate]);
    // Function to add leading zero if number is less than 10
    var formatTime = function (time) { return (time < 10 ? "0" + time : time); };
    return (React.createElement("div", { className: "text-center" }, !isTimeUp ? (React.createElement("div", { className: "timer_seting_fl" },
        timeLeft.days > 0 && (React.createElement("div", { className: "box_Set_timer flex flex-col items-center set_font_size" },
            React.createElement("span", { className: "" }, formatTime(timeLeft.days)),
            React.createElement("span", null, "Days"))),
        (timeLeft.hours > 0 || timeLeft.days > 0) && (React.createElement("div", { className: "box_Set_timer flex flex-col items-center set_font_size" },
            React.createElement("span", { className: "" },
                formatTime(timeLeft.hours),
                " ",
                React.createElement("p", { className: "period_am_pm" }, period)),
            React.createElement("span", null, "Hours"))),
        (timeLeft.minutes > 0 || timeLeft.hours > 0 || timeLeft.days > 0) && (React.createElement("div", { className: "box_Set_timer flex flex-col items-center set_font_size" },
            React.createElement("span", { className: "" }, formatTime(timeLeft.minutes)),
            React.createElement("span", null, "Minutes"))),
        React.createElement("div", { className: "box_Set_timer flex flex-col items-center set_font_size" },
            React.createElement("span", { className: "" }, formatTime(timeLeft.seconds)),
            React.createElement("span", null, "Seconds")))) : (React.createElement("h2", { className: "text-xl font-bold mt-4" }, "Time's Up!"))));
};
exports["default"] = CountdownTimer;
