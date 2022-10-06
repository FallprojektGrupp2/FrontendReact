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

export const GetSum = () => { 

  const parsedToken = JSON.parse(localStorage.getItem('token'));

  return(
    axios.get('https://localhost:44332/Budget/'+parsedToken)
    .then((res )=>{
        const data = res.data;
        return data
    })
  )  
}


export const CreateExpense = async (formData) => {
  const parsedToken = JSON.parse(localStorage.getItem('token'));
      await axios({
            method: "post",
            url: 'https://localhost:44332/Expense',
            data: {
                "amount": formData.amount,
                "receiver": formData.receiver,
                "timeStamp": formData.timeStamp,
                "comment": formData.comment,
                "userId": parsedToken,
                "categoryName": formData.categoryName
              },
            headers: { "Content-Type": "application/json" },
        })
    }


