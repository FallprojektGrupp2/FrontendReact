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


