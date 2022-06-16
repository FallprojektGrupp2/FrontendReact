import { GetExpenses } from "../../../API/AxiosExpense";
import { useEffect, useState } from "react";
import { Table } from 'antd';
import 'antd/dist/antd.css';

export function ListExpenses () {

    const [data, setdata] = useState([]);

    
    useEffect(() => {
     let mydata = (GetExpenses())
     .then(mydata => setdata(mydata)) 
     
     
    },[])

    const columns = [
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
            title: 'Receiver',
            dataIndex: 'receiver',
            key: 'reciever',
          },
        {
          title: 'Time',
          dataIndex: 'timeStamp',
          key: 'time',
        },
        {
            title: 'Comment',
            dataIndex: 'comment',
            key: 'comment',
          },
        {
          title: 'Category',
          dataIndex: 'categoryName',
          key: 'category',
        },
      ];
      

    console.log(data)

    return (
        <div>
        <Table dataSource={data} columns={columns} />;

       {/* {data.map((expenses)=> {
           
           return <div key={expenses.ExpenseId}> Amount: {expenses.amount} --- Reviever: {expenses.receiver}
          --- Time: {expenses.timeStamp} --- Comment: {expenses.comment} --- Category: {expenses.categoryName} </div>
       })}
      */}
     
       </div>
    )
}