import { ListExpenses } from "../components/Expenses/List-expenses/List-expenses-component";
import { CreateExpenseForm } from "../components/Expenses/Create-expense/Create-expense-component";
import { PieChartComponent } from "../components/Expenses/List-expenses/Expenses-pie-chart";


const Expense = () => {
    return (
        <>
        <div className="ExpensePage">
            <h1>Expenses</h1>
            <ListExpenses />
            <CreateExpenseForm />
        </div>
        <div>
        <PieChartComponent/>
        </div>
        </>
    )
};

export default Expense