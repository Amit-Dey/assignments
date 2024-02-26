// Date: It is used to work with dates and times in JavaScript.

// Creating a new date
function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  // getDate: Returns the day of the month (1-31)
  console.log("Date:", currentDate.getDate());
  // getMounth: Returns the month (0-11)
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  // getFullYear: Returns the year
  console.log("Year:", currentDate.getFullYear());
  // getHoures: Returns the hour (0-23)
  console.log("Hours:", currentDate.getHours());
  // getMinutes: Returns the minutes (0-59)
  console.log("Minutes:", currentDate.getMinutes());
  // getSeconds: Returns the seconds (0-59)
  console.log("Seconds:", currentDate.getSeconds());
  // getDats: Returns the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
  console.log("Day:", currentDate.getDay());


  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // getTime: Returns the number of milliseconds since the Unix epoch (January 1, 1970)
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  // How to compute process time using getTime
  const start = new Date();
  console.log("Start Time:", start);
  for (let i = 0; i < 1000000000; i++) {
    // Do nothing
  }
  const end = new Date();
  console.log("End Time:", end);
  console.log("Time taken in seconds:", (end.getTime() - start.getTime())/1000);


  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();

// Output:
//    Current Date: 2024-02-26T06:16:10.376Z
//    Date: 26
//    Month: 2
//    Year: 2024
//    Hours: 6
//    Minutes: 16
//    Seconds: 10
//    Day: 1
//    After setFullYear: 2022-02-26T06:16:10.376Z
//    After setMonth: 2022-06-26T06:16:10.376Z
//    Time in milliseconds since 1970: 1656224170376
//    Start Time: 2024-02-26T06:16:10.391Z
//    End Time: 2024-02-26T06:16:11.132Z
//    Time taken in seconds: 0.741
//    New Date: 2023-09-15T00:00:00.000Z

