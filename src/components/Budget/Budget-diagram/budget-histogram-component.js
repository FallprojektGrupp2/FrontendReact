import Chart from 'react-google-charts'
import './budget-diagram.css'
//Primary color antD: #1890FF
const topsum = 3500;
const spentOnFood = 2457;
const spentOnTransport = 1572;
const spentOnShopping = 453;
const spentOnEnjoyment = 576;
const spentOnHome = 893;
const spentOnOther = 523;

export const BudgetHistogramComponent = () => {

    return (
        <div className="budgetDiagramDiv">
            <Chart
                chartType="ColumnChart"
                options={{
                    colors: ['#1890FF'], backgroundColor: "#FFFFFF",
                    series: {
                        0: { targetAxisIndex: 0 }
                    },
                    chartArea: { height: '80%' },
                    title: "Monthly budget",
                    hAxis: { title: "Categories", viewWindow: { min: 0, max: 6 } },
                    vAxis: { title: "Sum", viewWindow: { min: 0, max: topsum } },
                    legend: "none"
                }}
                style={{
                    'height': '600px',
                    'display': 'flex',
                    'justify-content': 'center',
                    'minWidth': ' 900px'
                }}
                height="600px"
                data={[["Categories", "Sum"],
                ["Food", spentOnFood],
                ["Transportation", spentOnTransport],
                ["Shopping", spentOnShopping],
                ["Entertainment", spentOnEnjoyment],
                ["Housing & Utilities", spentOnHome],
                ["Miscellaneous", spentOnOther]]}
            />
        </div>
    );

}

