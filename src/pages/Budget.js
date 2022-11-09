
import { CreateBudgetForm } from "../components/Budget/budget-flik/budget-create";
import { ListExpenses } from "../components/Expenses/List-expenses/List-expenses-component";
import {React, useState , useEffect, props } from 'react';
import { GetExpenses } from "../API/AxiosExpense";
import { Col, DatePicker, Row } from "antd";


const Budgetss = () => {
    return (     <>
        <Row gutter={24} justify="center">
        <Col span={14}><h1>Budgets</h1> </Col>
        <Col span={8}><h1>Create budget</h1></Col>
        </Row>
        
        <Row gutter={24} justify="center">
            <Col span={14}>
            List budget
            </Col>
            <Col align='top' span={8}>
            <CreateBudgetForm/> 
            </Col>
        </Row>
        </>);
}

export default Budgetss

