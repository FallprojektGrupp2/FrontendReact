import Chart from 'react-google-charts'
import './budget-diagram.css'
//Primary color antD: #1890FF
const topsum = 3500; // set to highets spent if higher than highest category topsum in budget
const foodBudget = [3000, 2457];
const transportBudget = [1500, 1765];
const shoppingBudget = [1000, 453];
const entertainmentBudget = [1250, 576];
const homeBudget = [1200, 893];
const otherBudget = [2000, 523];

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const columnColors = ['#1890FF', '#FF7C00', '#FF0000']

const GetColumnColors = (budgetPercent) => {
    if (budgetPercent < 50)
        return columnColors[0]
    else if (budgetPercent > 89)
        return columnColors[2]
    else
        return columnColors[1]
}

const d = new Date();
document.write("The current month is " + months[d.getMonth()]);

const percentage = (partialValue, totalValue) => {
    const result = (100 * partialValue) / totalValue;
    return Math.round(result).toString()
}

export const BudgetHistogramComponent = () => {

    return (
        <div className="budgetDiagramDiv">
            <div className="monthlyBudgetDiv">
                <h1 className='title'>Budget {months[new Date().getMonth()]}</h1>
            </div>
            <Chart
                chartType="ColumnChart"
                options={{
                    colors: ['#e3e3e3'], backgroundColor: "#FFFFFF",
                    series: {
                        0: { targetAxisIndex: 0 }
                    },
                    chartArea: { height: '80%' },
                    title: "Monthly budget",
                    hAxis: { title: "Categories", viewWindow: { min: 0, max: 6, }, },
                    vAxis: { title: "Sum", viewWindow: { min: 0, max: topsum } },
                    legend: "none",
                    allowHtml: true,
                    stackSeries: true,
                    isStacked: true

                }}
                style={{
                    'height': '600px',
                    'display': 'flex',
                    'justify-content': 'center',
                    'minWidth': '1000px'
                }}
                height="600px"
                data={[
                    //Columns
                    ["Categories", "Sum spent", { role: "style" }, { role: "annotation" }, "Sum left in budget"],


                    //Data for columns

                    //FIRST COLUMN
                    ["Food", //CategoryName
                        foodBudget[1], // Sum spent in category
                        GetColumnColors(percentage(foodBudget[1], foodBudget[0])), //Status color, sum spent VS maximum sum in category
                        percentage(foodBudget[1], foodBudget[0]) + "%", // Percentage spent of maximum sum
                        foodBudget[0] - foodBudget[1]], // Colum on top of spent-column showing how much there's left to spend in that category before spending over budget

                    //SECOND COLUMN
                    ["Transportation",
                        transportBudget[1],
                        GetColumnColors(percentage(transportBudget[1], transportBudget[0])),
                        percentage(transportBudget[1], transportBudget[0]) + "%",
                        transportBudget[0] - transportBudget[1]],

                    //THIRD COLUMN
                    ["Shopping",
                        shoppingBudget[1],
                        GetColumnColors(percentage(shoppingBudget[1], shoppingBudget[0])),
                        percentage(shoppingBudget[1], shoppingBudget[0]) + "%",
                        shoppingBudget[0] - shoppingBudget[1]],

                    //FOURTH COLUMN
                    ["Entertainment",
                        entertainmentBudget[1],
                        GetColumnColors(percentage(entertainmentBudget[1], entertainmentBudget[0])),
                        percentage(entertainmentBudget[1], entertainmentBudget[0]) + "%",
                        entertainmentBudget[0] - entertainmentBudget[1]],

                    //FIFTH COLUMN
                    ["Housing & Utilities",
                        homeBudget[1],
                        GetColumnColors(percentage(homeBudget[1], homeBudget[0])),
                        percentage(homeBudget[1], homeBudget[0]) + "%",
                        homeBudget[0] - homeBudget[1]],

                    //SIXTH COLUMN
                    ["Other",
                        otherBudget[1],
                        GetColumnColors(percentage(otherBudget[1], otherBudget[0])),
                        percentage(otherBudget[1], otherBudget[0]) + "%",
                        otherBudget[0] - otherBudget[1]]]}
            />
        </div>
    );

}

