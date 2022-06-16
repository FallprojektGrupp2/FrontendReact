import { GetExpenses } from "../../../API/AxiosExpense";
import { useEffect, useState } from "react";
import { Table } from 'antd';
import 'antd/dist/antd.css';

export function ListExpenses() {

  const [data, setdata] = useState([]);


  useEffect(() => {
    let mydata = (GetExpenses())
      .then(mydata => setdata(mydata))


  }, [])

  const columns = [
    {
      title: '#',
      dataIndex: 'expenseId',
      key: 'ID',
      sorter: (a, b) => a.expenseId - b.expenseId,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: 'Reciever',
      dataIndex: 'receiver',
      key: 'reciever',
      sorter: ((a, b) => a.receiver.localeCompare(b.receiver))
    },
    {
      title: 'Time',
      dataIndex: 'timeStamp',
      key: 'time',
      sorter: (a, b) => a.timeStamp - b.timeStamp,
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      sorter: ((a, b) => a.comment.localeCompare(b.comment))
    },
    {
      title: 'Category',
      dataIndex: 'categoryName',
      key: 'category',
      sorter: ((a, b) => a.categoryName.localeCompare(b.categoryName))
    },
  ];


  console.log(data)

  return (
    <div>
      <Table dataSource={data} columns={columns} />;
    </div>
  )
}