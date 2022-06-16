import { GetExpenses } from "../../../API/AxiosExpense";
import { useEffect, useState } from "react";
import { Table, Space } from 'antd';
import 'antd/dist/antd.css';
import Column from "antd/lib/table/Column";

export function ListExpenses () {

    const [data, setdata] = useState([]);

    
    useEffect(() => {
     let mydata = (GetExpenses())
     .then(mydata => setdata(mydata)) 
     
     
    },[])
      

    console.log(data)

    return (
        <div>
        <Table dataSource={data}>
        <Column title="Amount" dataIndex="amount" key="amount"></Column>
        <Column title="Reciever" dataIndex="receiver" key="receiver"></Column>
        <Column title="Time" dataIndex="timeStamp" key="time"></Column>
        <Column title="Comment" dataIndex="comment" key="comment"></Column>
        <Column title="Category" dataIndex="categoryName" key="category"></Column>
        <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          
          <a>Delete</a>
        </Space>
      )}
    />

        </Table>

       {/* {data.map((expenses)=> {
           
           return <div key={expenses.ExpenseId}> Amount: {expenses.amount} --- Reviever: {expenses.receiver}
          --- Time: {expenses.timeStamp} --- Comment: {expenses.comment} --- Category: {expenses.categoryName} </div>
       })}
      */}
     
       </div>
    )
}