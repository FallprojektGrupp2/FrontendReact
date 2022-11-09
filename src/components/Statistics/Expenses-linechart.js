import { Alert } from 'antd';
import { useEffect, useState } from 'react';
import Chart from 'react-google-charts'
import { GetSumSpentPerMonth} from '../../API/AxiosExpense';
import { LoadingOutlined} from '@ant-design/icons';


export const LineChartComponent = ()=> {
    const [sumSpentYear, setSumSpentYear] = useState({});
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

useEffect(() => {
        const sums = GetSumSpentPerMonth()
         sums
         .then((data) => {
            if(!data.ok){
                setError(true)
            }
            setError(false)
            setSumSpentYear(data);
            setLoading(false)
        }).catch(error=>{
            setError(error.message)
            setLoading(false)
        })

       
}, [])


const january = sumSpentYear.sumJanuary;
const february = sumSpentYear.sumFebruary;
const march = sumSpentYear.sumMarch;
const april = sumSpentYear.sumApril;
const may = sumSpentYear.sumMay;
const june = sumSpentYear.sumJune;
const july = sumSpentYear.sumJuly;
const august = sumSpentYear.sumAugust;
const september =sumSpentYear.sumSeptember;
const october = sumSpentYear.sumOctober;
const november = sumSpentYear.sumNovember;
const december = sumSpentYear.sumDecember;

const datas = [
["Category", "Expenses"],
["January", january],
["February", february],
["March", march],
["April", april],
["May", may],
["June", june],
["July", july],
["August", august],
["September", september],
["Oktober", october],
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
         {loading &&
          <LoadingOutlined style={
            { display:'flex', justifyContent:'center', margin:'5px',fontSize: '50px' }
          } spin/>}
        {error && <Alert type='error'message='Error' description="Could not load data, check your internet connection" showIcon>{error}</Alert>}  
         <Chart
         className='line-chart'
      chartType="LineChart"
      width={"100%"}
      height={"400px"}
        data={datas}
        options={options}
    >
    </Chart>
    </>
    )


}