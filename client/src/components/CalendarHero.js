import React from "react";
import "./CalendarHero.css";
function CalendarHero() {
  const today = new Date();

  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (today.getFullYear() % 4 === 2) daysInMonth[1] = 29; // leap year

  let monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const displayWeek = () => {
    let weekList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekList.map((obj, i) => (
      <li key={i} className="calendar-week">
        {obj}
      </li>
    ));
  };

  const displayLastMonth = () => {
    let lastMonthList = [];
    const daysInLastMonth = daysInMonth[today.getMonth() - 1];

    // get day in week of the first day of this month
    // = day in the week of today - (space between today and first day of the month)
    // might be negative (cause go back in time) so +7 then %7
    let dayOfFirstDayThisMonth =
      (today.getDay() - ((today.getDate() % 7) - 1) + 7) % 7;

    // start going back to the nearest Sunday of last month
    // get number of day to go back by (day of last day last month)+1
    let goBackNum = (dayOfFirstDayThisMonth - 1 + 1 + 7) % 7;

    // push last month in list
    for (var i = goBackNum; i >= 1; i--)
      lastMonthList.push(daysInLastMonth - i + 1);
    return lastMonthList.map((obj, i) => (
      <li key={i} className="calendar-last-month">
        {obj}
      </li>
    ));
  };

  const displayThisMonth = () => {
    const daysInThisMonth = daysInMonth[today.getMonth()];
    let thisMonthList = [];

    // push this month in list
    for (var i = 0; i < daysInThisMonth; i++) thisMonthList.push(i + 1);

    return thisMonthList.map((obj, i) => {
      // add extra class for today
      if (obj === today.getDate())
        return (
          <li key={i} className="calendar-this-month calendar-today">
            <div className="calendar-today-container">{obj}</div>
          </li>
        );
      else
        return (
          <li key={i} className="calendar-this-month">
            {obj}
          </li>
        );
    });
  };

  const displayNextMonth = () => {
    let nextMonthList = [];
    const daysInThisMonth = daysInMonth[today.getMonth()];
    // get day in week of the last day of this month
    // = day in the week of today + (space between today and last day of the month)
    // might be more than 7 (cause go forward in time) so %7
    let dayOfLastDayThisMonth =
      today.getDay() + (daysInThisMonth % 7) - (today.getDate() % 7);
    dayOfLastDayThisMonth = dayOfLastDayThisMonth % 7;

    // start going forward to the nearest Saturday of last month
    // get number of days to Saturday by 6-(first day next month)+1
    let goForwardNum = (6 - (dayOfLastDayThisMonth + 1) + 1 + 7) % 7;

    // push next month in list
    for (var i = 1; i <= goForwardNum; i++) nextMonthList.push(i);

    return nextMonthList.map((obj, i) => (
      <li key={i} className="calendar-next-month">
        {obj}
      </li>
    ));
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-header">
        {monthName[today.getMonth()]} {today.getFullYear()}
      </h2>

      <ul className="calendar-week-container">{displayWeek()}</ul>

      <ul className="calendar-day-container">
        {displayLastMonth()}
        {displayThisMonth()}
        {displayNextMonth()}
      </ul>
    </div>
  );
}

export default CalendarHero;
