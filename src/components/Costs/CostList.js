import './CostList.css';
import CostItem from "./CostItem";

const CostList = ({data}) => {
    return(
        <ul className="cost-list">
            {
                data.map((cost) => <CostItem
                    key={cost.id}
                    date={new Date(cost.date)}
                    name={cost.name}
                    amount={cost.amount}/>
                )
            }
        </ul>

    )
}

export default CostList