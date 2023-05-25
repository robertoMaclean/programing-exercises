"use strict";
/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function timeConversion(s) {
    // Write your code here
    var onlyTime = removeAmPm(s);
    var hour = parseInt(s.slice(0, 2));
    if (isPm(s)) {
        var pmHour = pmHourToMilitaryFormat(hour);
        return pmHour + removeHour(onlyTime);
    }
    if (hour === 12)
        return "00" + removeHour(onlyTime);
    return onlyTime;
}
function removeAmPm(time) {
    return time.slice(0, time.length - 2);
}
function removeHour(time) {
    return time.slice(2, time.length);
}
function isPm(time) {
    var ampm = time.slice(time.length - 2, time.length);
    return ampm === "PM";
}
function pmHourToMilitaryFormat(hour) {
    var hourInMilitaryFormat = (hour + 12).toString();
    if (hourInMilitaryFormat === "24")
        return "12";
    return (hourInMilitaryFormat.length === 1)
        ? "0" + hourInMilitaryFormat
        : hourInMilitaryFormat;
}
function main() {
    for (var i = 0; i <= 12; i++) {
        var hour = (i > 9) ? i.toString() : "0" + i.toString();
        var amTime = hour + ":00:00AM";
        var pmTime = hour + ":00:00PM";
        var result = timeConversion(amTime);
        console.log("AM ".concat(result));
        result = timeConversion(pmTime);
        console.log("PM ".concat(result));
    }
}
main();
