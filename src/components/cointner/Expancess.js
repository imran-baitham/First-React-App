import "./Expancess.css";
import ExpanceItems from "../ExpanceItem";
import { Card } from "../Card/card";

const ExpancesForm = (props) => {
  return (
    <Card>
      {props.item.map((Expense, index) => (
        <ExpanceItems
          key={index}
          prise={Expense.dollar}
          subject={Expense.field}
          date={Expense.ExpanceDate}
        />
      ))}
    </Card>
  );
};

export default ExpancesForm;
