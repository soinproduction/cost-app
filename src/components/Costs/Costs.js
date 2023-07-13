import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import {useState} from "react";

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

            {filterCosts.map((cost) => <CostItem
                key={cost.id}
                date={new Date(cost.date)}
                name={cost.name}
                amount={cost.amount}/>)}
        </Card>
    );
}

export default Costs