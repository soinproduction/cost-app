import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import {useState} from "react";

const Costs = ({costs}) => {

    const [selectedYear, setSelectedYaar] = useState('2021');
    const getChangeYear = (year) => {
        setSelectedYaar(year)

        console.log(selectedYear)
    }


    console.log(costs)


    return(
      <div className="">
          <CostsFilter onChangeYear={getChangeYear} year={selectedYear}/>
          <Card className='costs'>
              {costs.map((cost,index) => <CostItem
                  key={index}
                  date={new Date(cost.date)}
                  name={cost.name}
                  amount={cost.amount}/>)}
          </Card>
      </div>

    );
}

export default Costs