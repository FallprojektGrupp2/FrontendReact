import { useEffect, useState } from 'react';
import Chart from 'react-google-charts'
import { GetSum } from '../../API/AxiosExpense';
import { Alert } from 'antd';
import { LoadingOutlined} from '@ant-design/icons';

export const PieChartComponent = ()=>{
const [category, setCategory] = useState({});
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)

useEffect (()=>{
        const categories = GetSum()
        categories
        .then((data=>{
            if(!data.ok){
                setError(true)
            }
            setError(false)
            setCategory(data)
            setLoading(false)
        })).catch(error=>{
            setLoading(false)
            setError(error.message)
        })
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
    chartArea: {width: '90%'},
    pieHole: 0.4,
    is3D: false,
    colors: ["#52c41a","#eb2f96","#096dd9","#722ed1","#fa541c","#bfbfbf"],
};

    return(
        <>
        {loading &&
          <LoadingOutlined style={
            { display:'flex', justifyContent:'center', margin:'5px',fontSize: '50px' }
          } spin/>}
        {error && <Alert type='error'message='Error' description="Something went wrong" showIcon>{error}</Alert>}
        <Chart 
        className='pie-chart' 
        chartType='PieChart'
        width={"100%"}
        height={"400px"}
            data={datas}
            options={options}
        >
        </Chart>
        </>
    )
}
