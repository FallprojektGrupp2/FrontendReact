import { ListBudgets } from "../../components/Budget/budget-flik/budget-list";


const Budgets = () => {
    return (<div style={{display: "flex", flexDirection: 'column', padding: 16,}}>
    <h1>Budgets</h1><ListBudgets />
    </div>
    );
}

export default Budgets

