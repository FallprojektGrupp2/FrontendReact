import axios from "axios";



export function GetExpenses ()  {
    
    const parsedToken = JSON.parse(localStorage.getItem('token')).replaceAll('/', '').replaceAll('"','');
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
      await axios({
            method: "post",
            url: 'https://localhost:44332/Expense',
            data: {
                "amount": formData.amount,
                "receiver": formData.receiver,
                "timeStamp": formData.timeStamp,
                "comment": formData.comment,
                "userId": formData.userId,
                "categoryName": formData.categoryName
              },
            headers: { "Content-Type": "application/json" },
        })
    }



    
export function DeleteExpenses (id)  {
    
  const parsedToken = JSON.stringify(id)
  return(
  axios.delete('https://localhost:44332/Expense/'+id)         
  .then((response) => {
    debugger
      const data = response.data;
      return(
          data
          
      )
  })
  )
}
