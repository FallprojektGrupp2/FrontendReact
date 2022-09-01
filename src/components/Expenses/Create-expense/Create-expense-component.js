import 'antd/dist/antd.css';
// import './index.css';
import React, { createContext } from 'react';
import { useState } from 'react';
import {CreateExpense} from "../../../API/AxiosExpense";
import moment from 'moment';

import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
} from 'antd';
const { TextArea } = Input;

export function CreateExpenseForm () {

    const [amount,setAmount] = useState("");
    const [receiver, setReciever] = useState("");
    const [categoryName, setCategory] = useState("");
    const [timeStamp, setDate] = useState("");
    const [comment, setComment] = useState("");
   
    const formData = [];

    const changeAmount = (event) =>{
        setAmount(event.target.value);
        }

    const changeReciever = (event) =>{
            setReciever(event.target.value);
        }

    const changeDate = () =>{
            setDate(moment().format());
        }

    const changeComment = (event) =>{
            setComment(event.target.value);
        }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        formData.userId = JSON.parse(localStorage.getItem('token'));
        formData.amount = amount;
        formData.receiver = receiver;
        formData.comment = comment;
        formData.timeStamp = timeStamp;
        formData.categoryName = categoryName;
        CreateExpense(formData);
    };

  return (
    <>
      <Form
      >
        <Form.Item label="Amount">
          <Input onChange={changeAmount}/>
        </Form.Item>
        <Form.Item label="Reciever">
          <Input onChange={changeReciever}/>
        </Form.Item>
        <Form.Item label="Select Category">
          <Select onChange={setCategory}>
            <Select.Option value="Food">Food</Select.Option>
            <Select.Option value="Transportation">Transportation</Select.Option>
            <Select.Option value="Shopping">Shopping</Select.Option>
            <Select.Option value="Entertainment">Entertainment</Select.Option>
            <Select.Option value= "Housing and Utilities">Housing and Utilities</Select.Option>
            <Select.Option value="Miscellaneous">Miscellaneous</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker onChange={changeDate}/>
        </Form.Item>
        <Form.Item label="Comment">
          <TextArea rows={4} onChange={changeComment}/>
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
        </Form.Item>
      </Form>
    </>
  );
};
