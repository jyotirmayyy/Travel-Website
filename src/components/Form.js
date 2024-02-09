import React, { useState } from "react";
//import { Button } from "./Button";
import "./Form.css";

const Form = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [numRooms, setNumRooms] = useState("");
  //------------------------------------------------------------------------------------
  const [submittedData, setSubmittedData] = useState(null);

  // Function takes event object as parameter contains information about the event that triggered the function call, in this case, the form submission event and does 3 tasks
  //e.preventDefault(): This is a method call on the event object. It prevents the default behavior of the form submission, which would typically cause the page to refresh or navigate to a new URL.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs and alert is popped
    if (
      !destination ||
      !checkInDate ||
      !checkOutDate ||
      !numGuests ||
      !numRooms
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Save submitted data, updates the current state of state variable from null to an object having multiple variables
    setSubmittedData({
      destination,
      checkInDate,
      checkOutDate,
      numGuests,
      numRooms,
    });
  };

  return (
    <>
      <h1 className="form-heading">Plan your Holiday now!!</h1>
      <div className="travel-form-container">
        <div className="travel-form">
          <form onSubmit={handleSubmit}>
            {/*     React event attribute, when a form is submitted through Enter/type="submit" button browser will trigger a form submission event.and "onSubmit" will be called     */}
            <label htmlFor="destination">Destination:</label>
            {/*The htmlFor attribute in React JSX is used with labels to specify which form element the label is associated with. equivalent to the for attribute in HTML and =/= JS for loop keyword.*/}
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              pattern="[A-Za-z\s]+"
              title="Please enter text only"
              required
            />
            {/*      value of 'htmlFor' is associated with 'id' attr of input      
            {destination} - variable, The current state returned by useState Hook     
            onChange - a React event attribute specifies function to be called whenever  value of input field changes.
            (e) => setDestination(e.target.value) - arrow function that takes an event object (e) as parameter
            e.target.value - retrieves the current value of the input field that triggered the event.
            setDestination - update the state variable 'destination' empty string null value with the new value entered by user. When setDestination is called with the new value, React will re-render the component, reflecting the updated state in the UI.
            this line of code ensures that the component's state stays in sync with the user's input.*/}

            <label htmlFor="checkInDate">Check-in Date:</label>
            <input
              type="date"
              id="checkInDate"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />

            <label htmlFor="checkOutDate">Check-out Date:</label>
            <input
              type="date"
              id="checkOutDate"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />

            <label htmlFor="numGuests">Number of Guests:</label>
            <input
              type="number"
              id="numGuests"
              value={numGuests}
              onChange={(e) => setNumGuests(e.target.value)}
              required
            />

            <label htmlFor="numRooms">Number of Rooms:</label>
            <input
              type="number"
              id="numRooms"
              value={numRooms}
              onChange={(e) => setNumRooms(e.target.value)}
              required
            />
            <div className="form-button-container">
              <button type="submit">Submit</button>
            </div>
          </form>

          {/*Because submittedData is not null and the below statement is logical AND (latter is true) -> the below code will run */}
          {submittedData && (
            <div className="submitted-data">
              <h2>Submitted Data:</h2>
              <p>
                <strong>
                  Destination:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                </strong>
                <mark>&nbsp;{submittedData.destination}&nbsp;</mark>
              </p>
              <p>
                <strong>
                  Check-in Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp;&nbsp;
                </strong>
                <mark>&nbsp;{submittedData.checkInDate}&nbsp;</mark>
              </p>
              <p>
                <strong>
                  Check-out
                  Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </strong>
                <mark>&nbsp;{submittedData.checkOutDate}&nbsp;</mark>
              </p>
              <p>
                <strong>Number of Guests:&nbsp;&nbsp;&nbsp;</strong>
                <mark>&nbsp;{submittedData.numGuests}&nbsp;</mark>
              </p>
              <p>
                <strong>Number of Rooms:&nbsp;&nbsp;&nbsp;</strong>
                <mark>&nbsp;{submittedData.numRooms}&nbsp;</mark>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
