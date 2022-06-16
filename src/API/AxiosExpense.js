import axios from "axios";



export function GetExpenses ()  {
    return(
    axios.get('https://localhost:44332/Expense/4')            
    .then((response) => {
        const data = response.data;
     
        return(
            data
        )
    })
    )
}


