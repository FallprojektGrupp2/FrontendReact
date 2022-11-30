import { CreateBudgetForm } from "../../components/Budget/budget-flik/budget-create";


const CreateBudget = () => {
    return (<div style={{display: "flex", flexDirection: 'column', padding: 16, maxWidth: 600, margin: 'auto'}}>
        <h1>Create Budget</h1>
        <CreateBudgetForm />
    </div>);
}

export default CreateBudget

