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


const foodCategory = category.foodCategorySpent;
const shoppingCategory = category.shoppingCategorySpent
const transportCategory = category.transportationCategorySpent
const entertainmentCategory = category.entertainmentCategorySpent
const homeCategory = category.housingAndUtilitiesCategorySpent
const uncategorised = category.uncategorisedCategorySpent;

const datas = [
["Category", "Expenses"],
["Food", foodCategory],
["Shopping", shoppingCategory],
["Transport", transportCategory],
["Entertainment", entertainmentCategory],
["Uncategorised", uncategorised],
["Housing & Utilities", homeCategory]

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