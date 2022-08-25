import axios from "axios";



export function GetExpenses ()  {
    
    const parsedToken = JSON.parse(localStorage.getItem('token'));
    return(
    axios.get('https://localhost:44332/Expense/'+parsedToken)            
    .then((response) => {
        const data = response.data;
        return(
            data
        )
    })
    )
}

export function CreateExpense(formData) {

    const parsedToken = JSON.parse(localStorage.getItem('token'));

    const expenseForm = new FormData();
    expenseForm.append(formData.amount, "amount")
    expenseForm.append(formData.reciever, "reciever")
    expenseForm.append(formData.timeStamp, "timeStamp")
    expenseForm.append(1, "userId")
    expenseForm.append(formData.categoryName, "categoryName")
    

    return(
        axios({
            method: "post",
            url: 'https://localhost:44332/Expense/', 
            data: expenseForm,
        })

    )
}


