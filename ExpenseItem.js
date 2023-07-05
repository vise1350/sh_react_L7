import "./ExpenseItem.css";

function ExpenseItem(){

    const expenseDate=new Date(2023,6,6)
    const expenseTitle="Car Insurance";
    const expenseLocation ="Location of Expenditure:India"
    const expenseAmount=3000

    return (  <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>

            <div>{expenseLocation} </div>

            <div className="expense-item__price">Rs {expenseAmount}</div>

        </div>
        
    </div>
    )
    

    }
   

export default ExpenseItem;