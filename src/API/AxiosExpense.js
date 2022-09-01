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

export const GetSum = () => { 

  const parsedToken = JSON.parse(localStorage.getItem('token'));

  return(
    axios.get('https://localhost:44332/Budget/1')
    .then((res )=>{
        const data = res.data;
        return data
    })
  )  
}




