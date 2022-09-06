import { ListExpenses } from "../components/Expenses/List-expenses/List-expenses-component";
import { CreateExpenseForm } from "../components/Expenses/Create-expense/Create-expense-component";
import { PieChartComponent } from "../components/Expenses/List-expenses/Expenses-pie-chart";


const Expense = () => {
    return (
        <>
        <h1>Expenses</h1>
        <div className="ExpensePage">
            <ListExpenses />
            <CreateExpenseForm />
        </div>
        <div className="PieChart">
        <PieChartComponent/>
        </div>
        </>
    )
};

export default Expense