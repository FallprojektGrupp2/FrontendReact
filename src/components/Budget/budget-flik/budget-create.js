import './budget-flik.css' ;
import 'antd/dist/antd.css';
import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import {PostBudget} from "../../../API/AxiosExpense";

import {
  Form,
  Input,
  InputNumber,
  Button,
  DatePicker,
} from 'antd';
const { TextArea } = Input;

export function CreateBudgetForm ({ handleNewBudgetForm}) {

	const [amount,setAmount] = useState("");
    const [name, setName] = useState("");
    const [categoryName, setCategory] = useState("");
    const [timeStamp, setDate] = useState("");
 
   
    const formData = [];

    const changeAmount = (event) =>{
        setAmount(event);
        }

    const changeName = (event) =>{
            setName(event.target.value);
        }

    const changeDate = () =>{
            setDate(moment().format());
        }

  
    
    const handleSubmit = () => {
  
        formData.userId = JSON.parse(localStorage.getItem('token'));
        formData.amount = amount;
        formData.receiver = name;
        formData.timeStamp = timeStamp;
        formData.categoryName = categoryName;
        PostBudget(formData)
        .then(() => {

          handleNewBudgetForm();
        })
    };

	return  (
		<>
		 <Form className='expenseForm' onSubmit={handleSubmit}>
		<div className='budgetForm'>
		    <Form.Item label="Namn"
        name="namn"
        rules={[
          {
            required: true,
            message: 'Lägg in ett namn!',
          },
        ]}>
          <Input onChange={changeName}/>
        </Form.Item>
			<Form.Item 
        label="Summa"
        name="amount"
        rules={[
          {  
            required: true,
            message: 'Lägg in en siffra!',
          },
        ]}
         >
        <InputNumber  min={0} max={99999999} onChange={changeAmount} />
        </Form.Item>

				
		<Form.Item 
        label="Datum"
        name="timeStamp"
        rules={[
          {
            required: true,
            message: 'Lägg in ett datum',
          },
        ]}>
          <DatePicker defaultValue={moment()} onChange={changeDate}/>
        </Form.Item>
				    
		 <div className='budgetInputWrapperSmall'>
					<Form.Item
						    label= 'Mat'
							type='number'
							name='Food'
							>
							<input
							value={categoryName.Food}
							onChange={setCategory}
						/>
						 </Form.Item>
					</div>
		<div className='budgetInputWrapperSmall'>
					<Form.Item
						    label= 'Transport'
							type='number'
							name='Car'
							>
							<input
							value={categoryName.Transportation}
							onChange={setCategory}
						/>
						</Form.Item>
					</div>
		<div className='budgetInputWrapperSmall'>
					<Form.Item
						    label= 'Shoppa'
							type='number'
							name='Shopping'
							>
							<input
							value={categoryName.Shopping}
							onChange={setCategory}
						/>
						</Form.Item>
					</div>
		<div className='budgetInputWrapperSmall'>

						<Form.Item
						    label='Nöje'
							type='number'
							name='Clothes'
							>
							<input
							value={categoryName.Entertainment}
							onChange={setCategory}
						/>
					    </Form.Item>
					</div>
		<div className='budgetInputWrapperSmall'>
					<Form.Item
						    label='Bostad'
							type='number'
							name='Housing'
							>
							<input
							value={categoryName.Housing}
							onChange={setCategory}
						/>
					 </Form.Item>
					</div>
		<div className='budgetInputWrapperSmall'>
					<Form.Item
						    label='Annat'
							type='number'
							name='Other'
							>
							<input
							value={categoryName.Other}
							onChange={setCategory}
						/>
					</Form.Item>
					</div>
          
					<Form.Item>
                       <Button type="primary" htmlType="submit">
                     Submit
                    </Button>
                    </Form.Item>
			
			</div>
		</Form>
		</>
	);
};