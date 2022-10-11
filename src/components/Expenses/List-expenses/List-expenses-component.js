import { GetExpenses,DeleteExpenses } from "../../../API/AxiosExpense";
import { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Button, Col, Row, Space, Table, Tooltip } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DeleteOutlined } from "@ant-design/icons";




export function ListExpenses({ expenses }) {

  

  const [data, setdata] = useState([]);

  const testDate = (timeStamp) => {


    const date = new Date(timeStamp);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month}-${day}`
}

    useEffect(() => {
      setdata(expenses)
    }, [expenses])

    useEffect(() => {
     let allExpenses = []

     let mydata = (GetExpenses())
     .then(mydata => {
      mydata.forEach((expense) => {
          allExpenses.push({
              key: expense.expenseId,
              amount: expense.amount,
              categoryName: expense.categoryName,
              comment: expense.comment,
              receiver: expense.receiver,
              timeStamp: testDate(expense.timeStamp),
      
          })
        })
      setdata(allExpenses)})
     
     
    },[])

    const onClickDelete=async(id)=>{
      let allExpenses=[];
     const result= await DeleteExpenses (id);
     let mydata = (GetExpenses())
     .then(mydata => {
      mydata.forEach((expense) => {
          allExpenses.push({
              key: expense.expenseId,
              amount: expense.amount,
              categoryName: expense.categoryName,
              comment: expense.comment,
              receiver: expense.receiver,
              timeStamp: testDate(expense.timeStamp),
      
          })
        })
      setdata(allExpenses)})

    }
    console.log('data',data)
        const [filteredInfo, setFilteredInfo] = useState({});
        const [sortedInfo, setSortedInfo] = useState({});
        const handleChange = (pagination, filters, sorter) => {
            console.log('Various parameters', pagination, filters, sorter);
            setFilteredInfo(filters);
            setSortedInfo(sorter);
    };


    const columns = [
      {
        title: 'Amount',
        dataIndex: 'amount',
        key: "amount",
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
          title: 'Category',
          dataIndex: 'categoryName',
          key: 'categoryName',
          filters: [
            {
              text: 'Uncategorised',
              value: 'Uncategorised',
            },
            {
              text: 'Food',
              value: 'Food',
            },
            {
              text: 'Other',
              value: 'Other',
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
              text: 'Transportation',
              value: 'Transportation',
            },
            
          ],
          filteredValue: filteredInfo.categoryName || null,
          onFilter: (value, record) => record.categoryName.includes(value),
          sorter: (a, b) => a.categoryName.localeCompare(b.categoryName),
          sortOrder: sortedInfo.columnKey === 'categoryName' ? sortedInfo.order : null,
          ellipsis: true,

        },
        {
          title: "Delete",
          key: "Delete",
          render: (item) => (
            <div>
              {/* <a className="deleteButton" onClick={DeleteExpense}>Delete</a> */}
              <Button danger onClick={()=>onClickDelete(item.key)} type= "primary" shape= "circle" icon={<DeleteOutlined></DeleteOutlined>}></Button>
            </div>
          )
          }
      ];
    

    return ( 
      <Table style={{ height: '750px' }} size="small" columns={columns} dataSource={data} onChange={handleChange}
          expandable={{
            expandedRowRender: (record) => (
              <p backgroundColor="black"
                style={{
                  margin: 0,
                }}
              >
                {record.comment}
              </p>
            ),
          }}
          />
          );
    };
  