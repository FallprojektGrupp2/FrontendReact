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
    return (
        <>
        <Row  style={{width: 'auto'}}>
        <Col ><h1>Expenses</h1> </Col>
        </Row>
        
        <Row style={{width: 'auto'}}>
            <Col >
            <ListExpenses />
            </Col>
        </Row>
        </>
    )

}

