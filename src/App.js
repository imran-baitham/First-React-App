import "./App.css";
import react, { useState } from "react";
import { NewItemForm } from "./components/forms/newFormFile/formExpance";
import ExpancesForm from "./components/cointner/Expancess";

let NEW__EXPANCE = [
  {
    ExpanceDate: new Date(2022, 1, 21),
    dollar: 100,
    field: "Cars Inshrones",
  },
  {
    ExpanceDate: new Date(2022, 1, 21),
    dollar: 50,
    field: "Bikes Inshrones",
  },
  {
    ExpanceDate: new Date(2022, 1, 21),
    dollar: 300,
    field: "Trakes Inshrones",
  },
  {
    ExpanceDate: new Date(2022, 1, 21),
    dollar: 150,
    field: "Witzs Inshrones",
  },
];

const App = () => {
  const [expances, newExpancess] = useState(NEW__EXPANCE);

  let Handle = (dataCall) => {
    let updateData = [dataCall, ...expances];
    console.log(updateData);
    newExpancess(updateData);
  };

  return (
    <div className="big__cointner">
      <h1 className="hello">First Todo-App</h1>
      <NewItemForm PassNewData={Handle} />
      <ExpancesForm item={NEW__EXPANCE} />
    </div>
  );
};

export default App;
