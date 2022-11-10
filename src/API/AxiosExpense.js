import { message } from "antd";
import axios from "axios";




export function GetExpenses() {
  const parsedToken = JSON.parse(localStorage.getItem('token'));

  return (
    axios.get('https://localhost:44332/Expense/' + parsedToken)
      .then((response) => {
        console.log("GetExpenses done")
        const data = response.data;
        return (
          data

        )
      })
  )
}


export const GetSum = () => {

  const parsedToken = JSON.parse(localStorage.getItem('token'));

  return (
    axios.get('https://localhost:44332/PieChart/' + parsedToken)
      .then((res) => {
        const data = res.data;
        return data
      })
      .catch(error=>{
        console.log(error.message)
      })
  )
}


export const GetSumSpentYearAndMonth = () => {
  const parsedToken = JSON.parse(localStorage.getItem('token'));

  return (
    axios.get('https://localhost:44332/Expense/TotalSumsSpent/' + parsedToken)
      .then((res) => {
        const data = res.data;
        return data
      })
  )
}
export const GetSumSpentPerMonth = () => {
  const parsedToken = JSON.parse(localStorage.getItem('token'));

  return (
    axios.get('https://localhost:44332/SpentPerMonth/' + parsedToken)
      .then((res) => {
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
                  "userId": formData.userId,
                  "categoryName": formData.categoryName
                },
              headers: { "Content-Type": "application/json" },
            })
        }
          
export const PostBudget = async (formData) => {
   const parsedToken = JSON.parse(localStorage.getItem('token'));
      await axios({
        
              method: "post",
              url: 'https://localhost:44332/Budget',
              data: {
                   "amount": formData.amount,
                   "budgetName": formData.name,
                   "startDate": formData.startDate,
                   "endDate": formData.endDate,
                   "userId": formData.userId,
                   "categoryName": formData.categoryName
                },
               headers: { "Content-Type": "application/json" },
             })
          }

// export function GetBudget() {
//    const parsedToken = JSON.parse(localStorage.getItem('token'));
          
//    return (
//               axios.get('https://localhost:44332/Budget/' + parsedToken)
//                 .then((response) => {
//                   console.log("GetBudget done")
//                   const data = response.data;
//                   return (
//                     data
          
//                   )
//                 })
//             )
//           }
              
// export function DeleteBudget (id)  {
    
//     const parsedToken = JSON.stringify(id)
//        return(
//             axios.delete('https://localhost:44332/Budget/'+id)         
//             .then((response) => {
//                 const data = response.data;
//                 return(
//                     data
          
//                   )
//                 })
//             )
//           }          

export function DeleteExpenses (id)  {
    
  const parsedToken = JSON.stringify(id)
  return(
  axios.delete('https://localhost:44332/Expense/'+id)         
  .then((response) => {
      const data = response.data;
      return(
          data

        )
      })
  )
}

export function EditExpenses (id, data)  {
    
  return(
  axios.put('https://localhost:44332/Expense/'+id, {...data, "userId": localStorage.getItem('token'),})         
  .then((response) => {
      return response;
  })
  )
}