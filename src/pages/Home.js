import { BudgetHistogramComponent } from "../components/Budget/Budget-diagram/budget-histogram-component";
import background from '../assets/waves.svg'


const Home = () => {
    return (<div>
        <img src={background} style={{width: "100%"}} alt="SVG logo image"/>
        <BudgetHistogramComponent />
    </div>);
};

export default Home