
import { CreateBudgetForm } from "../components/Budget/budget-flik/budget-create";
import { ListBudgets } from "../components/Budget/budget-flik/budget-list";
import {React, useState , useEffect, props } from 'react';
import { GetExpenses } from "../API/AxiosExpense";
import { Col, DatePicker, Row } from "antd";


const Budgetss = () => {
    return (     <>
        <Row gutter={24} justify="center">
        <Col span={14}><h1>Budgets</h1> </Col>
        <Col span={8}><h1>Create budget</h1></Col>
        </Row>
        
        <Row align='top' gutter={24} justify="center">
            <Col span={14}>
            <ListBudgets />
            </Col>
            <Col span={8}>
            <CreateBudgetForm/> 
            </Col>
        </Row>
        </>);
}

export default Budgetss

