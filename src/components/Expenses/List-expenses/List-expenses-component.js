import { GetExpenses } from "../../../API/AxiosExpense";
import { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Space, Table } from "antd";



export function ListExpenses() {

  const [data, setdata] = useState([]);

    useEffect(() => {
     let mydata = (GetExpenses())
     .then(mydata => setdata(mydata)) 
     
     
    },[])
        const [filteredInfo, setFilteredInfo] = useState({});
        const [sortedInfo, setSortedInfo] = useState({});
        const handleChange = (pagination, filters, sorter) => {
            console.log('Various parameters', pagination, filters, sorter);
            setFilteredInfo(filters);
            setSortedInfo(sorter);
    };

    const columns = [
      {
        title: '#',
        dataIndex: 'expenseId',
        key: 'ID',
        sorter: (a, b) => a.expenseId - b.expenseId,
        sortOrder: sortedInfo.columnKey === 'ID' ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        sorter: (a, b) => a.amount - b.amount,
        sortOrder: sortedInfo.columnKey === 'amount' ? sortedInfo.order : null,
        ellipsis: true,
      },
        {
            title: 'Receiver',
            dataIndex: 'receiver',
            key: 'receiver',
            sorter: (a, b) => a.receiver.localeCompare(b.receiver),
            sortOrder: sortedInfo.columnKey === 'receiver' ? sortedInfo.order : null,
            ellipsis: true,
          },
        {
          title: 'Time',
          dataIndex: 'timeStamp',
          key: 'timeStamp',
          sorter: (a, b) => a.timeStamp.localeCompare(b.timeStamp),
          sortOrder: sortedInfo.columnKey === 'timeStamp' ? sortedInfo.order : null,
          ellipsis: true,
        },
        {
            title: 'Comment',
            dataIndex: 'comment',
            key: 'comment',
            sorter: (a, b) => a.comment.localeCompare(b.comment),
            sortOrder: sortedInfo.columnKey === 'comment' ? sortedInfo.order : null,
            ellipsis: true,
          },
        {
          title: 'Category',
          dataIndex: 'categoryName',
          key: 'categoryName',
          filters: [
            {
              text: 'Food',
              value: 'Food',
            },
            {
              text: 'Transportation',
              value: 'Transportation',
            },
            {
              text: 'Shopping',
              value: 'Shopping',
            },
            {
              text: 'Entertainment',
              value: 'Entertainment',
            },
            {
              text: 'Housing & Utilities',
              value: 'Housing & Utilities',
            },
            {
              text: 'Miscellaneous',
              value: 'Miscellaneous',
            },
            {
              text: 'Shopping',
              value: 'Shopping',
            },
            
          ],
          filteredValue: filteredInfo.categoryName || null,
          onFilter: (value, record) => record.categoryName.includes(value),
          sorter: (a, b) => a.categoryName.length - b.categoryName.length,
          sortOrder: sortedInfo.columnKey === 'categoryName' ? sortedInfo.order : null,
          ellipsis: true,

        },
        {
          title: "Action",
          key: "action",
          render: () => (
            <Space size="middle">
              <a>Delete</a>
            </Space>
          )
          }
      ];
      

    console.log(data)

    return ( 
          <Table columns={columns} dataSource={data} onChange={handleChange} />
     
          );
    };
  

