"use strict";
/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
  // Write your code here
  const onlyTime = removeAmPm(s);
  const hour = parseInt(s.slice(0, 2));
  if (isPm(s)) {
    let pmHour = pmHourToMilitaryFormat(hour);
    return pmHour + removeHour(onlyTime);
  }
  if (hour === 12) return "00" + removeHour(onlyTime);
  return onlyTime;
}

function removeAmPm(time: string) {
  return time.slice(0, time.length - 2);
}

function removeHour(time: string) {
  return time.slice(2, time.length);
}

function isPm(time: string): boolean {
  const ampm = time.slice(time.length - 2, time.length);
  return ampm === "PM";
}

function pmHourToMilitaryFormat(hour: number): string {
  let hourInMilitaryFormat = (hour + 12).toString();
  if (hourInMilitaryFormat === "24") return "12";
  return (hourInMilitaryFormat.length === 1)
    ? "0" + hourInMilitaryFormat
    : hourInMilitaryFormat;
}

function main() {
  for (let i = 0; i <= 12; i++) {
    const hour = (i > 9) ? i.toString() : "0" + i.toString();
    const amTime = hour + ":00:00AM";
    const pmTime = hour + ":00:00PM";
    let result: string = timeConversion(amTime);
    console.log(`AM ${result}`);
    result = timeConversion(pmTime);
    console.log(`PM ${result}`);
  }
}

main();
