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
    axios.get('https://localhost:44332/Budget/1')
    .then((res )=>{
        const data = res.data;
        return data
    })
  )  
}


export function CreateExpense(formData) {
      axios({
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
        .then(function (response) {
            alert("Done! - Refreshing page")
            window.location.reload(true);
            console.log(response);
          })
          .catch(function (response) {
            alert("there was an error, expense not created")
            console.log(response);
          });

    }


