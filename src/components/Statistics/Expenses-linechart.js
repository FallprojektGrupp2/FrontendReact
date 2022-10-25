import { useEffect, useState } from 'react';
import Chart from 'react-google-charts'
import { GetSum, GetExpenses } from '../../API/AxiosExpense';

export default function LineChartComponent() {
    const [date, setDate] = useState({});

    const getMonth = (timeStamp) => {

  
        const date = new Date(timeStamp);
    

        const month = date.getMonth();
    
        return month
    }

useEffect (()=>{
    let allExpenses = [];
    let mydata = GetExpenses()
    .then((mydata=>{
        mydata.forEach(expense => {
            allExpenses.push({
                timeStamp: getMonth(expense.timeStamp),
                amount: expense.amount
                
            })
        });
    }))
},[])


const january = date.amount;
const february = date.amount;
const mars = date.amount;
const april = date.amount;
const may = date.amount;
const june = date.amount;
const july = date.amount;
const august = date.amount;
const september = date.amount;
const oktober = date.amount;
const november = date.amount;
const december = date.amount;

const datas = [
["Category", "Expenses"],
["January", january],
["February", february],
["Mars", mars],
["April", april],
["May", may],
["June", june],
["July", july],
["August", august],
["September", september],
["Oktober", oktober],
["November", november],
["December", december]
]
    const options = {
        title: "Spent this year",
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