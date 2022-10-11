import { useEffect, useState } from 'react';
import Chart from 'react-google-charts'
import { GetSum } from '../../API/AxiosExpense';

export default function LineChartComponent() {
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
const housingCategory = category.housingCategorySpent
const otherCategory = category.otherCategorySpent;

const datas = [
["Category", "Expenses"],
["Food", foodCategory],
["Shopping", shoppingCategory],
["Transport", transportCategory],
["Entertainment", entertainmentCategory],
["Housing", housingCategory],
["Other", otherCategory]
]
    const options = {
        title: "Spent per category",
        legend: 'none',
        hAxis: { minValue: 0, maxValue: 9 },
        curveType: 'function',
        pointSize: 12,
        dataOpacity: 0.7
    };

    return(
        <>
         <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={datas}
      options={options}
    />
        </>
    )


}