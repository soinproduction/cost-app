import './CostItem.css';
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = ({date,name,amount}) => {

    return (
        <Card className="cost-item">
            <CostDate date={date} />
           <div className="cost-item__description">
               <h2>{name}</h2>
               <div className="cost-item__price">${amount}</div>
           </div>
        </Card>
    );
}
export default CostItem;