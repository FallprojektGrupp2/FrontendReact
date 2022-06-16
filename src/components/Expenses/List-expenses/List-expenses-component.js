import { GetExpenses } from "../../../API/AxiosExpense";
import { List } from "antd";
import { useState } from "react";

export function ListExpenses () {

    const [data, setdata] = useState([]);

    setdata(GetExpenses());
    const expenseData = GetExpenses();
    
    console.log(expenseData.then((e) => {return e}))

    return (
        <div>
        {/* {expenseData.map(item => {
            return (
               <div>{item.reciever} {item.amount} </div>
            )
        })}            */}
       </div>
    
    // <>
    // <List
    // itemLayout="horizontal"
    // dataSource={expenseData}
    // renderItem={(item) => (<List.Item>{item.amount}</List.Item>)}/>
    // </>
    )
}