import { ListExpenses } from "../components/Expenses/List-expenses/List-expenses-component";
import { CreateExpenseForm } from "../components/Expenses/Create-expense/Create-expense-component";
import { PieChartComponent } from "../components/Expenses/List-expenses/Expenses-pie-chart";
import axios from "axios";
import {React, useState , useEffect, props } from 'react';
import {CreateExpense} from "../API/AxiosExpense";

//skicka event i createexpenseform
//fetchen av listan av expenses bör ligga här
//redux 

//axiosanrop här, skicka det till listExpense i ett state
//listexpense ta emot en prop

//Createexpense berättar 
//Callbackfun
 

export default function Expense() {
    const [expenses, setExpenses] = useState([]);
    const parsedToken = JSON.parse(localStorage.getItem('token'));
    
    const HandleNewExpenseForm = () => {
           axios.get('https://localhost:44332/Expense/'+parsedToken)            
            .then((response) => {
                const expenses = response.data;
                
                setExpenses(expenses)})
            
        }
        
    useEffect(() => {
        console.log("new expense created")
        }, [expenses]);
    
        
    return (
        <>
        <h1>Expenses</h1>
        <div className="ExpensePage">
            <ListExpenses expenses={expenses}/>
            <CreateExpenseForm handleNewExpenseForm={HandleNewExpenseForm}/> 
        </div>
        <div className="PieChart">
        <PieChartComponent/>
        </div>
        </>
    )

}

