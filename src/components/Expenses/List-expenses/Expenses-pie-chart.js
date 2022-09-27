import { useEffect, useState } from 'react';
import Chart from 'react-google-charts'
import { GetSum } from '../../../API/AxiosExpense';

export const PieChartComponent = ()=>{
const [category, setCategory] = useState({});

useEffect (()=>{
    const categories = GetSum()
    console.log(categories)
    categories.then((data=>{
        setCategory(data)
    }))
},[])


const food = category.foodSpent;
const shopping = category.shoppingSpent
const transport = category.transportationSpent
const entertainment = category.entertainmentSpent
const housing = category.housingSpent
const other = category.otherSpent;

const datas = [
["Category", "Expenses"],
["Food", food],
["Shopping", shopping],
["Transport", transport],
["Entertainment", entertainment],
["Uncategorised", other],
["Housing & Utilities", housing]

]

const options = {
    title: "Expenses",
    chartArea: {width: '90%'},
    pieHole: 0.4,
    is3D: false,
    colors: ["#eb2f96", "#52c41a","#096dd9","#722ed1","#bfbfbf","#fa541c","#fadb14"],
};


    return(
        <Chart className='pie-chart' chartType='PieChart'
        width={"100%"}
        height={"400px"}
            data={datas}
            options={options}
        />
    )
}