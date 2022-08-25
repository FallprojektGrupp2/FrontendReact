import { ListExpenses } from "../components/Expenses/List-expenses/List-expenses-component";
import { CreateExpenseForm } from "../components/Expenses/Create-expense/Create-expense-component";


const Expense = () => {
    return (
        <div>
            <h1>Expenses</h1>
            <ListExpenses />
            <CreateExpenseForm />
        </div>
    )
};

export default Expense