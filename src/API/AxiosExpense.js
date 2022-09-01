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

   debugger

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
            headers: {"accept": "*/*"}
        })
        .then(function (response) {
            alert("done!")
            console.log(response);
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });

    }


