import { GetExpenses } from "../../../API/AxiosExpense";
import { List } from "antd";
import { useEffect, useState } from "react";

export function ListExpenses () {

    const [data, setdata] = useState([]);
  

    useEffect(() => {
        setdata(GetExpenses());
    })

    debugger
    
    if (data)
    {
        console.log(data)
    }

    return (
        <div>
       {data?.map((expenses)=> {
           console.log(expenses)
           return <div key={expenses.ExpenseId}> {expenses.comment} </div>
       })}
       <p>hej</p>
       </div>
    )
}