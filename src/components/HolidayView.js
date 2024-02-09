import React, { useState } from "react";
import "./HolidayView.css";

const HolidayView = () => {
  // State to store the selected year
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // initial value inside ()
  // 'new Date().getFullYear()' - This expression creates a new Date object representing the current date and time. 'getFullYear()' is a method of the Date object that returns the year (as a four-digit number) of the specified date according to local time. So, 'new Date().getFullYear()' gives us the current year.'
  //code initializes a state variable selectedYear with the current year and a function setSelectedYear to update the selected year.

  // Function to handle year change
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  //event - The event parameter represents the event object generated by the change event detected by onChange, here it's the event object generated when the user selects a different year from the dropdown.
  //event.target - This refers to the element that triggered the event, in this case, the < select > element.
  //event.target.value - This retrieves the value of the selected option from the <select> element. In this context, it represents the year selected by the user.
  // setSelectedYear(event.target.value) - This line calls the setSelectedYear function, which was created by the useState hook. It updates the selectedYear state variable with the value of the selected year.

  // Function to generate placeholder holiday data for a given year
  const generateHolidayData = (year) => {
    // passing the selected year as parameter of this arrow function
    const holidays = [
      { date: `01-01-${year}`, name: "New Year's Day" },
      { date: `02-14-${year}`, name: "Valentine's Day" },
      { date: `01-26-${year}`, name: "Republic Day" },
      { date: `08-15-${year}`, name: "Independence Day" },
    ];
    return holidays; // Retuns an array of holidays objects
  };
  // Generate holiday data for the selected year
  const holidayData = generateHolidayData(selectedYear);

  return (
    <div className="holiday-view">
      <h2>Holiday View for Year {selectedYear}</h2>
      <select value={selectedYear} onChange={handleYearChange}>
        {" "}
        {/* Default year shown will be 2024 */}
        {/*     onChange is an event handler attribute that specifies a function to run when the value of an <input>, <select>, or <textarea> element changes.     */}
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
      <ul>
        {holidayData.map((holiday, index) => (
          <li key={index}>
            {holiday.date}&nbsp;&nbsp; - &nbsp;&nbsp;{holiday.name}
          </li>
        ))}
      </ul>
      {/* map function to iterate over each element in the holidayData array and generate a list item (<li>) for each holiday.
      holidayData: This is an array containing "holidays" objects for a particular year.

    .map((holiday, index) => (...)) - This calls the map method on the holidayData() . For each holidays object in the array, it executes the provided arrow function, passing the current holidays object as holiday and its index as index.

    <li key={index}> - key attribute is a special sting attribute used by React to efficiently update the list when items are added, removed, or reordered. It should be unique for each list item, so here it's using the index as the key.*/}
    </div>
  );
};

export default HolidayView;