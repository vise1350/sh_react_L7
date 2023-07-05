import "./ExpenseItem.css";

function ExpenseItem(props){

    const expenseDate=new Date(2023,6,6)
    const expenseTitle="Car Insurance";
    const expenseLocation ="Location of Expenditure:India"
    const expenseAmount=3000

    return (  <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>

            <div>{props.loc} </div>

            <div className="expense-item__price">Rs {props.amount}</div>

        </div>
        
    </div>
    )
    

    }
   

export default ExpenseItem;