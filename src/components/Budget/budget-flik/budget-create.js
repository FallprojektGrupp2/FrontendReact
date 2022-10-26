
import { useEffect, useState } from 'react';
import './budget-flik.css' ;


export function CreateBudgetForm () {
	const initialData = { name: '', totalSum: 0, date: '', month: '', year: '', categoriesAndAmount: {} };
	const initialCatData = { Food: 0, Car: 0, Subscriptions: 0, Clothes: 0, Treat: 0, Other: 0 };
	const [loading, setLoading] = useState(false);
	const [ setMessage] = useState('');
	const [counter, setCounter] = useState(0);
	const [data, setData] = useState(initialData);
	const [catData, setCatData] = useState(initialCatData);

	const [posted] = useState(false);
	const [validated, setValidated] = useState(false);
	const [disableSubmit, setdisableSubmit] = useState(true);
	const [sumLeft, setSumLeft] = useState();

	useEffect(() => {
		const catSum = Object.values(catData)
			.map(Number)
			.reduce(function (a, b) {
				return a + b;
			}, 0);
		setSumLeft(data.totalSum - catSum);

		if (sumLeft > 0 || sumLeft < 0 || Object.values(catData).every((x) => x === 0)) {
			setValidated(false);
			setdisableSubmit(true);
		} else if (sumLeft === 0) {
			if (posted === false && data.date != '') {
				setdisableSubmit(false);
				setValidated(true);
			}
		}
	}, [catData, data.totalSum,data.date ,sumLeft, posted]);
	const handleFormChange = (e) => {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleCatChange = (e) => {
		setCatData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const uploadBudget = async (e) => {
		if (validated) {
			try {
				setLoading(true);
				let postData = data;
				postData['month'] = new Date(postData.date).getMonth();
				postData['year'] = new Date(postData.date).getFullYear();
			
			} catch {
				setMessage('Sparning misslyckades');
				setCounter(counter + 1);
			} finally {
				setLoading(false);
			}
		}
	};

	return  (
		<div className='budgetForm'>
			<div>
			<label className='labelClass ' htmlFor=''>
							<h2>Skapa Budget</h2>
						</label>
			<h2 className='textBudget'></h2>
			</div>
			<div id='budgetForm'>
				<form id='form1' className='form-main' onSubmit={handleSubmit}>
					<div className='budgetInputWrapper'>
						<label className='labelClass ' htmlFor='name'>
							Namn:
						</label>
						<input
							className='input-main'
							type='text'
							id='name'
							value={data.name}
							onChange={(event) => handleFormChange(event)}
							name='name'
							rules={[
								{
								  required: true,
								  message: 'Skriv in ett namn',
								},
							  ]}
						/>
					</div>
					<div className='budgetInputWrapperBelopp'>
						<label className='labelClassBelopp ' htmlFor='totalSum'>
							Total belopp:
						</label>
						<input
							className='budgetInputWrapper'
							type='number'
							name='totalSum'
							id='totalSum'
							value={data.totalSum}
							onChange={(event) => handleFormChange(event)}
							rules={[
								{
								  required: true,
								  message: 'Skriv in en siffra',
								},
							  ]}
						/>
					</div>
				
					<div className='budgetInputWrapper'>
						<label className='labelClass' htmlFor='date'>
							Budget månad:
						</label>
						<input
							className='budgetInputWrapper'
							type='date'
							id='budgetDate'
							name='date'
							value={data.date}
							onChange={(event) => handleFormChange(event)}
							selectRange={true}
							rules={[
								{
								  required: true,
								  message: 'Lägg in ett datum',
								},
							  ]}
						/>
						
					</div>
					<div className='textbudget'>
						<label className='labelClass ' htmlFor=''>
							<h3>Kategorier:</h3>
						</label>
					</div>
					<div className='budgetInputWrapper'>
						<label className='labelClass ' htmlFor='Food'>
							Mat:
						</label>
						<input
							className='input-main'
							type='number'
							name='Food'
							value={catData.Food}
							onChange={(event) => handleCatChange(event)}
						/>
					</div>
					<div className='textBudget'>
						<label className='labelClass ' htmlFor='Transportation'>
						  Transport:
						</label>
						<input
							className='input-main'
							type='number'
							name='Car'
							value={catData.Car}
							onChange={(event) => handleCatChange(event)}
						/>
					</div>
					<div className='budgetInputWrapper'>
						<label className='labelClass ' htmlFor='Shopping'>
							Shoppa:
						</label>
						<input
							className='input-main'
							type='number'
							name='Subscriptions'
							value={catData.Subscriptions}
							onChange={(event) => handleCatChange(event)}
						/>
					</div>
					<div className='budgetInputWrapper'>
						<label className='labelClass ' htmlFor='Entertaimnet'>
							Nöje:
						</label>
						<input
							name='Clothes'
							value={catData.Clothes}
							onChange={(event) => handleCatChange(event)}
						/>
					</div>
					<div className='budgetInputWrapper'>
						<label className='labelClass ' htmlFor='HousingUtilities'>
							Bostad:
						</label>
						<input
							className='input-main'
							type='number'
							name='HousingUtilities'
							value={catData.Treat}
							onChange={(event) => handleCatChange(event)}
						/>
					</div>
					<div className='budgetInputWrapper'>
						<label className='labelClass ' htmlFor='Other'>
							Annat:
						</label>
						<input
							className='input-main'
							type='number'
							name='Other'
							value={catData.Other}
							onChange={(event) => handleCatChange(event)}
						/>
					</div>
                    <div className='buttonDiv'>
					<button
						className={disableSubmit ? 'btn-disabled' : 'btn-main'}
						id='budgetSumbit'
						disabled={disableSubmit ? true : false}
						onClick={uploadBudget}
					>
						{disableSubmit ? <p>Spara Budget: {sumLeft}</p> : 'Spara'}
					
					</button></div>
				</form>
			</div>
		
		</div>
	);
};
