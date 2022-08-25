import { Col, Row } from 'antd';
import Chart from 'react-google-charts'


const foodCategory = 2489;
const shoppingCategory = 589;
const transportCategory = 1289;
const entertainmentCategory = 345;
const homeCategory = 0;
const otherCategory = 0;
const uncategorised = 0;

export const data = [
["Category", "Expenses"],
["Food", foodCategory],
["Shopping", shoppingCategory],
["Transport", transportCategory],
["Entertainment", entertainmentCategory],
]

export const options = {
    title: "Expenses",
    chartArea: {width: '90%'},
    pieHole: 0.4,
    is3D: false,
    colors: ["#eb2f96", "#52c41a","#096dd9","#722ed1","#bfbfbf","#fa541c","#fadb14"],
};

export const PieChartComponent = ()=>{
    return(
        <Chart className='pie-chart' chartType='PieChart'
        width={"100%"}
        height={"400px"}
            data={data}
            options={options}
        />
    )
}