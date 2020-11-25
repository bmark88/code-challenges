// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 

function timeConversion(s) {
  const meridiem = s.slice(-2);
  const hour = s.slice(0, 2);
  const remaining = s.slice(2, -2);

  if (meridiem === 'AM') {
    if (hour === '12') {
      return `00${remaining}`;
    }

    return s.slice(0, -2);
  } else if (meridiem === 'PM') {
    if (hour === '12') {
      return `00${remaining}`;
    }

    return `${ (Number(hour) + 12).toString() }${remaining}`;
  }
};

console.log(timeConversion('11:05:45PM'));