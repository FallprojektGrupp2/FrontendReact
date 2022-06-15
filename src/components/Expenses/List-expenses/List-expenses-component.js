import { GetExpenses } from "../../../API/AxiosExpense";
import { List } from "antd";
import { useEffect, useState } from "react";

export function ListExpenses () {

    const [data, setdata] = useState([]);

    
    useEffect(() => {
     let mydata = (GetExpenses())
     .then(mydata => setdata(mydata)) 
     
     
    },[])

 

    return (
        <div>
       {data.map((expenses)=> {
           
           return <div key={expenses.ExpenseId}> Amount: {expenses.amount} --- Reviever: {expenses.receiver}
          --- Time: {expenses.timeStamp} --- Comment: {expenses.comment} --- Category: {expenses.categoryName} </div>
       })}
     
     
       </div>
    )
}