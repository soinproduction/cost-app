import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import {useState} from "react";
import CostList from "./CostList";
import CostDiagram from "./CostDiagram";

const Costs = ({costs}) => {
    let filterCosts;
    const [selectedYear, setSelectedYear] = useState('all');
    const getChangeYear = (year) => {
        setSelectedYear(year)
    }

    if (selectedYear === 'all') {
        filterCosts = costs;
    } else {
        filterCosts = costs.filter((cost) => {
            return new Date(cost.date).getFullYear() === +selectedYear;
        });
    }

    return(
        <Card className='costs'>
            <CostsFilter onChangeYear={getChangeYear} costs={costs} year={selectedYear}/>
            <CostDiagram data={filterCosts}/>
            <CostList data={filterCosts}/>
        </Card>
    );
}

export default Costs