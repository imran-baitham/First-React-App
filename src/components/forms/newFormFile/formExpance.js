import "./formExpance.css";
import react, { useState } from "react";

export const NewItemForm = (props) => {
  const [myTitle, myNewTitle] = useState("");
  const [myNumber, myNewNumber] = useState("");
  const [myDate, myNewDate] = useState("");

  const handleTitle = (e) => {
    myNewTitle(e.target.value);
  };
  const handleNumber = (e) => {
    myNewNumber(e.target.value);
  };
  const handleDate = (e) => {
    myNewDate(e.target.value);
  };

  let submitHandler = (e) => {
    e.preventDefault();

    const expanceData = {
      ExpanceDate: new Date(myDate),
      dollar: Number(myNumber),
      field: myTitle,
    };

    const expanceNewData = {
      ...expanceData,
    };

    props.PassNewData(expanceNewData);

    myNewTitle("");
    myNewDate("");
    myNewNumber("");
  };

  return (
    <div className="form__input">
      <form className="form__value" onSubmit={submitHandler}>
        <label>title</label>
        <input type="text" value={myTitle} onChange={handleTitle} />
        <label>Number</label>
        <input
          type="number"
          value={myNumber}
          min="1"
          max=""
          onChange={handleNumber}
        />
        <label>Date</label>
        <input type="date" value={myDate} onChange={handleDate} />
        <div className="button__submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
