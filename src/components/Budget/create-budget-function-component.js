// import './create-budget.css'
// import { useEffect, useState } from 'react';
// import{GlobalProvider} from './context/GlobalState'



// export function CreateBudget () {
// 	const budgetData = { name: '', totalSum: 0  };
// 	const categoryData = { Food: 0, Transportation: 0, Shopping: 0, Entertainment: 0, HousingUtilities: 0, Miscellaneous: 0 };
// 	const [data, setData] = useState(budgetData);
// 	const [catData, setCatData] = useState(categoryData);

// 	const [startDate, setStartDate] = useState(new Date("2014/02/08"));
// 	const [endDate, setEndDate] = useState(new Date("2014/02/10"));
	

// 	const [posted, setPosted] = useState(false);
// 	const [validated, setValidated] = useState(false);
// 	const [disableSubmit, setdisableSubmit] = useState(true);
// 	const [sumLeft, setSumLeft] = useState();

// 	useEffect(() => {
// 		const catSum = Object.values(catData)
// 			.map(Number)
// 			.reduce(function (a, b) {
// 				return a + b;
// 			}, 0);
// 		setSumLeft(data.totalSum - catSum);

// 		if (sumLeft > 0 || sumLeft < 0 || Object.values(catData).every((x) => x === 0)) {
// 			setValidated(false);
// 			setdisableSubmit(true);
// 		} else if (sumLeft === 0) {
// 			if (posted === false) {
// 				setdisableSubmit(false);
// 				setValidated(true);
// 			}
// 		}
// 	}, [catData, data.totalSum,data.date ,sumLeft, posted]);
// 	const handleFormChange = (e) => {
// 		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// 	};
// 	const handleCatChange = (e) => {
// 		setCatData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// 	};
// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 	};



// 	return (
// 		<div className='container'>
// 			<h1 className='budgetH1'>Skapa en ny Budget</h1>
// 			<div className='budgetForm'>
// 				<form id='form1' className='formBudget1' onSubmit={handleSubmit}>
// 					<div className='inputWrapper'>
// 						<label className='labelBudget' htmlFor='name'>
// 							Namn:
// 						</label>
// 						<input className='inputBudget' type='text' id='name' value={data.name} onChange={(event) => handleFormChange(event)} name='name'/>
// 					</div>
// 					<div className='inputWrapper'>
// 						<label className='labelBudget' htmlFor='totalSum'>
// 							Total belopp:
// 						</label>
// 						<input className='inputBudget' type='number'	name='totalSum' id='totalSum' value={data.totalSum} onChange={(event) => handleFormChange(event)}/>
// 					</div>
// 					<div className='totalSumWraper'>
// 						<h3>Belopp kvar: {sumLeft}</h3>
// 					</div>

// 					<div className='input-wrapper'>
// 						<label className='label-main' htmlFor='date'>
// 							Budget månad:
// 						</label>
// 						<input
// 							className='input-main'
// 							type='date'
// 							id='budgetDate'
// 							name='date'
					
// 							onChange={(date) => setStartDate(date)}
// 							startDate={startDate}
// 						/>
// 						<input
// 							className='input-main'
// 							type='date'
// 							id='budgetDate'
// 							name='date'
						
// 							onChange={(date) => setEndDate(date)}
// 							endDate={endDate}
// 						/>
						
// 					</div>

					
// 					<div className='h2budgetWrapper'>
// 						<h2 className='labelBudget' htmlFor=''>
// 							Kategorier:
// 						</h2>
// 					</div>
// 					<div className='inputWrapper'>
// 						<label className='labelBudget' htmlFor='Food'>
// 							Food:
// 						</label>
// 						<input className='inputBudget' type='number' name='Food' value={catData.Food} onChange={(event) => handleCatChange(event)}/>
// 					</div>
// 					<div className='inputWrapper'>
// 						<label className='labelBudget' htmlFor='Transportation'>
// 						Transportation:
// 						</label>
// 						<input className='inputBudget' type='number' name='Transportation' value={catData.Car} onChange={(event) => handleCatChange(event)}/>
// 					</div>
// 					<div className='inputWrapper'>
// 						<label className='labelBudget' htmlFor='Shopping'>
// 							Shopping:
// 						</label>
// 						<input className='inputBudget' type='number' name='Shopping' value={catData.Subscriptions} onChange={(event) => handleCatChange(event)} />
// 					</div>
// 					<div className='inputWrapper'>
// 						<label className='labelBudget' htmlFor='Entertainment'>
// 						Entertainment:
// 						</label>
// 						<input className='inputBuget' type='number' name='Entertainment' value={catData.Clothes} onChange={(event) => handleCatChange(event)} />
// 					</div>
// 					<div className='inputWrapper'>
// 						<label className='labelBudget' htmlFor='HousingUtilities'>
// 						Housing & Utilities:
// 						</label>
// 						<input className='inputBudget' type='number' name='HousingUtilities' value={catData.Treat} onChange={(event) => handleCatChange(event)}/>
// 					</div>
// 					<div className='inputWrapper'>
// 						<label className='labelBudget' htmlFor='Miscellaneous'>
// 						Miscellaneous:
// 						</label>
// 						<input	className='inputBudget' type='number' name='Miscellaneous' value={catData.Other} onChange={(event) => handleCatChange(event)}/>
// 					</div>

					

// 					<button
// 						className={disableSubmit ? 'btn-disabled' : 'btn-main'}
// 						id='budgetSumbit'
// 						disabled={disableSubmit ? true : false}
		
// 					>
// 						{disableSubmit ? <p>Belopp kvar: {sumLeft}</p> : 'Spara'}
						
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

