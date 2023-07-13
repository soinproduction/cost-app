import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import {useState} from "react";

const Costs = ({costs}) => {

    const [selectedYear, setSelectedYear] = useState('2021');
    const getChangeYear = (year) => {
        setSelectedYear(year)
    }


    let filterCosts;

    if (selectedYear === 'all') {
        filterCosts = costs;
    } else {
        filterCosts = costs.filter((cost) => {
            return cost.date.split('-')[0] === selectedYear;
        });
    }



    return(
        <Card className='costs'>
            <CostsFilter onChangeYear={getChangeYear} year={selectedYear}/>

            {filterCosts.map((cost) => <CostItem
                key={cost.id}
                date={new Date(cost.date)}
                name={cost.name}
                amount={cost.amount}/>)}
        </Card>
    );
}

export default Costs