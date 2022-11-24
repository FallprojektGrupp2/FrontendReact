// import { GetBudget,DeleteBudget } from "../../../API/AxiosExpense";
import { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Form, Button, DatePicker, Input,  Select, Table } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DeleteOutlined } from "@ant-design/icons";
import { Modal } from "../../Modal/Modal";
import TextArea from "antd/lib/input/TextArea";
import moment from "moment";

const { Option } = Select;



export function ListBudgets({ handleBudgetList}) {

  const [data, setdata] = useState([]);

  const startDate = (timeStamp) => {
    const date = new Date(timeStamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month}-${day}`

    
    

}


 

    // useEffect(() => {
    //  let allBudget = []

    //  let mydata = (GetBudget())
    //  .then(mydata => {
    //   mydata.forEach((budget) => {
    //       allBudget.push({
    //           key: budget.budgetId,
    //           amount: budget.amount,
    //           categoryName: budget.categoryName,
    //           budgetName: budget.budgetName,
    //           startDate: startDate(budget.timeStamp),
      
    //       })
    //     })
    //   setdata(allBudget)})
     
     
    // },[handleBudgetList])

    // const onClickDelete=(id)=>{
    //   let budgetDelete=[];
    //  const result= DeleteBudget (id);
    //  let mydata = (GetBudget())
    //  .then(mydata => {
    //   mydata.forEach((budget) => {
    //       budgetDelete.push({
    //         key: budget.budgetId,
    //         amount: budget.amount,
    //         categoryName: budget.categoryName,
    //         budgetName: budget.budgetName,
    //         startDate: startDate(budget.timeStamp),
      
    //       })
    //     })
    //   setdata(budgetDelete)})

    // }
   
    
        const [filteredInfo, setFilteredInfo] = useState({});
        const [sortedInfo, setSortedInfo] = useState({});
        const handleChange = (pagination, filters, sorter) => {
            console.log('Various parameters', pagination, filters, sorter);
            setFilteredInfo(filters);
            setSortedInfo(sorter);
    };


    const [openModal, setOpenModal] = useState(false);
    
    const [modalData, setModalData] = useState();
    

    const handelChangeModal = (name, data) => {
      setModalData({...modalData, [name]: data})
    }

  
    

    // const columns = [
    //   {
    //     title: 'Summa',
    //     dataIndex: 'amount',
    //     key: "amount",
    //     sorter: (a, b) => a.amount - b.amount,
    //     sortOrder: sortedInfo.columnKey === 'amount' ? sortedInfo.order : null,
    //     ellipsis: true,
    //   },
    //     {
    //         title: 'Namn',
    //         dataIndex: 'budgetName',
    //         key: 'budgetName',
    //         sorter: (a, b) => a.receiver.localeCompare(b.receiver),
    //         sortOrder: sortedInfo.columnKey === 'budgetName' ? sortedInfo.order : null,
    //         ellipsis: true,
    //       },
         
    //     {
    //       title: 'Startdatum',
    //       dataIndex: 'startDate',
    //       key: 'startDate',
    //       sorter: (a, b) => a.timeStamp.localeCompare(b.timeStamp),
    //       sortOrder: sortedInfo.columnKey === 'startDate' ? sortedInfo.order : null,
    //       ellipsis: true,
          
    //     },
    //     {
    //       title: 'Slutdatum',
    //       dataIndex: 'endDate',
    //       key: 'endDate',
    //       sorter: (a, b) => a.timeStamp.localeCompare(b.timeStamp),
    //       sortOrder: sortedInfo.columnKey === 'endDate' ? sortedInfo.order : null,
    //       ellipsis: true,
          
    //     },
    //     {
    //       title: 'Kategori',
    //       dataIndex: 'categoryName',
    //       key: 'categoryName',
    //       filters: [
    //         {
    //           text: 'Uncategorised',
    //           value: 'Uncategorised',
    //         },
    //         {
    //           text: 'Food',
    //           value: 'Food',
    //         },
    //         {
    //           text: 'Other',
    //           value: 'Other',
    //         },
    //         {
    //           text: 'Entertainment',
    //           value: 'Entertainment',
    //         },
    //         {
    //           text: 'Housing & Utilities',
    //           value: 'Housing & Utilities',
    //         },
    //         {
    //           text: 'Transportation',
    //           value: 'Transportation',
    //         },
            
    //       ],
    //       filteredValue: filteredInfo.categoryName || null,
    //       onFilter: (value, record) => record.categoryName.includes(value),
    //       sorter: (a, b) => a.categoryName.localeCompare(b.categoryName),
    //       sortOrder: sortedInfo.columnKey === 'categoryName' ? sortedInfo.order : null,
    //       ellipsis: true,

    //     },
    //     {
    //       title: "Radera",
    //       key: "Delete",
    //       render: (item) => (
    //         <div>
          
    //           {/* <a className="deleteButton" onClick={DeleteExpense}>Delete</a> */}
    //           <Button danger onClick={()=>onClickDelete(item.key)} type= "primary" shape= "circle" icon={<DeleteOutlined></DeleteOutlined>}></Button>
    //         </div>
    //       )
    //       },

    //   ];


      const dataSource = [
        {
          key: '1',
          budgetName: 'Semester',
          startDate: '2022-02-06',
          endDate: '2022-03-06',
          amount: 18000,
          category: 'Nöje'
        },
        {
          key: '2',
          budgetName: 'Renovering',
          startDate: '2022-02-06',
          endDate: '2022-04-06',
          amount: 200000,
          category: 'Bostad'
        },
        {
          key: '3',
          budgetName: 'Handla',
          startDate: '2022-03-01',
          endDate: '2022-04-01',
          amount: 3000,
          category: 'Mat'
        },
        {
          key: '4',
          budgetName: 'Kläder',
          startDate: '2022-03-01',
          endDate: '2022-04-01',
          amount: 2500,
          category: 'Shoppa'
        },
        {
          key: '4',
          budgetName: 'Bilkostnad',
          startDate: '2022-04-01',
          endDate: '2022-06-01',
          amount: 5000,
          category: 'Transport'
        },
      ];
      
      const columns = [
        {
          title: 'Namn',
          dataIndex: 'budgetName',
          key: 'budgetName',
        },
        {
          title: 'Startdatum',
          dataIndex: 'startDate',
          key: 'startDate',
        },
        {
          title: 'Slutdatum',
          dataIndex: 'endDate',
          key: 'endDate',
        },
        {
          title: 'Summa',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
          title: 'Kategori',
          dataIndex: 'category',
          key: 'category',
        },
        {
                title: "Radera",
                key: "Delete",
                render: (item) => (
                  <div>
                
                    {/* <a className="deleteButton" onClick={DeleteExpense}>Delete</a> */}
                    <Button danger  type= "primary" shape= "circle" icon={<DeleteOutlined></DeleteOutlined>}></Button>
                  </div>
                )
                },
      ];
      
      <Table dataSource={dataSource} columns={columns} />;

    return ( 
      <>
       <Form>
         <Table style={{ width:'1000px' }} size="small"  dataSource={dataSource} columns={columns}  onChange={handleChange}
          expandable={{
            expandedRowRender: (record) => (
              <p backgroundColor="black"
                style={{
                  margin: 0,
                }}
              >
              </p>
            ),
          }}
          />
          <Modal open={openModal} >
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <h5>Edit Expenses</h5>
        


       
      <div>

      </div>

            </div>
          </Modal>
          </Form>
     
      </>
   
          );
    };
  