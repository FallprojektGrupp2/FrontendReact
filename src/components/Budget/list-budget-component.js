import { GetExpenses } from "../../API/AxiosExpense";
import { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Space, Table } from "antd";



export function ListBudget() {

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
            
          ],
          filteredValue: filteredInfo.categoryName || null,
          onFilter: (value, record) => record.categoryName.includes(value),
          sorter: (a, b) => a.categoryName.localeCompare(b.categoryName),
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


















// import { useState, useEffect } from 'react';



// const GetBudget = () => {
// 	const [errorMessage, setMessage] = useState('');
// 	const [counter, setCounter] = useState(0);
// 	const [data, setData] = useState();

// 	useEffect(() => {
// 		try {
// 			const fetchData = async () => {
// 				setLoading(true);
// 				const fetchresult = await API_Service.GetService('Budget');
// 				if (fetchresult !== null) {
// 					setData(fetchresult);
// 				} else {
// 					setMessage('Kunde inte hämta data');
// 				'	setCounter(counter + 1);
// 					setTimer(4000);'
// 				}
// 			};
// 			fetchData();
// 		} catch {
// 			setMessage('Kunde inte ansluta, kolla din internetåtkomst');
// 			setCounter(counter + 1);
// 			setTimer(4000);
// 		} finally {
// 			setLoading(false);
// 		}
// 	}, [counter]);

// 	function getBackgroundColor(procent) {
// 		if (procent >= 80 && procent < 100) {
// 			return 'orange';
// 		} else if (procent > 100) {
// 			return 'red';
// 		}
// 	}
// 	if (data) {
// 		return (
// 			<>
// 				<h1 className='text-white mb-10'>Aktuell Budget</h1>
// 				<div className='table-main'>
// 					<h2>{data.budgetName}</h2>
// 					<h4>
// 						Total Budget: {data.totalSum} Använd Budget: {data.usedAmount} Procent:{' '}
// 						{((parseInt(data.usedAmount) * 100) / parseInt(data.totalSum)).toFixed(2)} %
// 					</h4>
// 					{/* </div> */}
// 					<table className='table-main'>
// 						<tr className='table-row'>
// 							<th className='table-header'>Kategorier</th>
// 							{Object.keys(data.budgetCategories).map((x) => (
// 								<th className='table-header'>{x}</th>
// 							))}
// 						</tr>
// 						<tr className='table-row'>
// 							<th className='table-header'>Gräns</th>
// 							{Object.values(data.budgetCategories).map((x) => (
// 								<td className='table-cell'>{x[0]}</td>
// 							))}
// 						</tr>
// 						<tr className='table-row'>
// 							<th className='table-header'>Använt</th>
// 							{Object.values(data.budgetCategories).map((x) => (
// 								<td className='table-cell'>{x[1]}</td>
// 							))}
// 						</tr>
// 						<tr className='table-row'>
// 							<th className='table-header'>Belopp kvar</th>
// 							{Object.values(data.budgetCategories).map((x) => (
// 								<td className='table-cell'>{x[2]}</td>
// 							))}
// 						</tr>
// 						<tr className='table-row'>
// 							<th className='table-header'>Procent</th>
// 							{Object.values(data.budgetCategories).map((x) => (
// 								<td className='table-cell' style={{ backgroundColor: getBackgroundColor(parseInt(x[3])) }}>
// 									{x[3]}
// 								</td>
// 							))}
// 						</tr>
// 					</table>
// 				</div>
// 				<DefaultRender errorMessage={errorMessage} counter={counter} />
// 			</>
// 		);
// 	} else {
// 		return null;
// 	}
// };
// export default GetBudget;