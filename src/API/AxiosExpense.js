import axios from "axios";


export function GetExpenses ()  {
    
    const parsedToken = JSON.parse(localStorage.getItem('token'));

    return(
    axios.get('https://localhost:44332/Expense/1')            
    .then((response) => {
        const data = response.data;
        return(
            data
        )
    })
    )
}


export function PostBudget ()  {
    
    const parsedToken = JSON.parse(localStorage.getItem('token'));

    return(
    axios.post('https://localhost:44332/Budget/1')            
    .then((response) => {
        const data = response.data;
        return(
            data
        )
    })
    )
}



