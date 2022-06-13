import { GetExpenses } from "../../../API/AxiosExpense";
import { List } from "antd";
import { useEffect, useState } from "react";

export function ListExpenses () {

    const [data, setdata] = useState([]);

    
    useEffect(() => {
     let mydata = (GetExpenses())
     .then(mydata => setdata(mydata))
    },[])

    if (data)
    {
        
    }

  

    return (
        <div>
       {data.map((expenses)=> {
           console.log(expenses)
           return <div key={expenses.ExpenseId}> {expenses.comment} </div>
       })}
     
      <p>hej</p>
       </div>
    )
}