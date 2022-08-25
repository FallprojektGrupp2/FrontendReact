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

export function CreateExpense(data) {

    const parsedToken = JSON.parse(localStorage.getItem('token'));

    const expenseForm = new FormData();
    expenseForm.append(data.amount, "amount")
    expenseForm.append(data.reciever, "reciever")
    expenseForm.append(data.timeStamp, "timeStamp")
    expenseForm.append(parsedToken, "userId")
    expenseForm.append(data.categoryName, "categoryName")
    

    return(
        axios({
            method: "post",
            url: 'https://localhost:44332/Expense/', 
            data: expenseForm,
        })

    )
}


