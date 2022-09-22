import { ListExpenses } from "../components/Expenses/List-expenses/List-expenses-component";
import { CreateExpenseForm } from "../components/Expenses/Create-expense/Create-expense-component";
import { PieChartComponent } from "../components/Expenses/List-expenses/Expenses-pie-chart";
import axios from "axios";


//skicka event i createexpenseform
//fetchen av listan av expenses bör ligga här
//redux 

//axiosanrop här, skicka det till listExpense i ett state
//listexpense ta emot en prop

//Createexpense berättar 
//Callbackfun


const Expense = () => {
    const [expenses, setExpenses] = []

    let  handleNewExpenseForm = () => {
         axios.get("")
        // uppdatera statet med nya listan
    }
    return (
        <>
        <h1>Expenses</h1>
        <div className="ExpensePage">
            <ListExpenses expenses={expenses}/>
            <CreateExpenseForm handleSubmit={handleNewExpenseForm}/> 
        </div>
        <div className="PieChart">
        <PieChartComponent/>
        </div>
        </>
    )
};

export default Expense
