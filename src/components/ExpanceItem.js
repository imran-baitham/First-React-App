import "./ExpanceItem.css";
import react, { useState } from "react";
import { Card } from "./Card/card";

const ExpanceItems = (props) => {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let year = props.date.getFullYear();
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <Card>
      <div className="expanceItems">
        <div className="expance__item">
          <div className="div__one">
            <div className="date__style">
              <div>{month}/</div>
              <div>{year}/</div>
              <div>{day}</div>
            </div>
            <h3>{props.subject}</h3>
          </div>
          <div className="div__two">
            <div className="expance__price">${props.prise}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ExpanceItems;
