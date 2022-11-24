import { ListExpenses } from "../../components/Expenses/List-expenses/List-expenses-component";
import { CreateExpenseForm } from "../../components/Expenses/Create-expense/Create-expense-component";
import {React, useState , useEffect, props } from 'react';
import { GetExpenses } from "../../API/AxiosExpense";
import { Col, DatePicker, Row } from "antd";

//skicka event i createexpenseform
//fetchen av listan av expenses bör ligga här
//redux 

//axiosanrop här, skicka det till listExpense i ett state
//listexpense ta emot en prop

//Createexpense berättar 
//Callbackfun
 

export default function Expense() {
    const [expenses, setExpenses] = useState([]);
    const HandleNewExpenseForm = () => {
            GetExpenses()
            .then((data) => {
                setExpenses(data);            
            })
        }
        
    useEffect(() => {
        }, [expenses]);
    
        
    return (
        <div style={{display: "flex", flexDirection: 'column', padding: 16, maxWidth: 600, margin: 'auto'}}>
            <h1>Create expense</h1>
            <CreateExpenseForm handleNewExpenseForm={HandleNewExpenseForm}/> 

        </div>
    )

}

