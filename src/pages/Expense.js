import { ListExpenses } from "../components/Expenses/List-expenses/List-expenses-component";
import { PieChartComponent } from "../components/Expenses/List-expenses/Expenses-pie-chart";

const Expense = () => {
    return (
        <div>
            <h1>Expenses</h1>
            <ListExpenses />
            <PieChartComponent/>
        </div>
    )
};

export default Expense