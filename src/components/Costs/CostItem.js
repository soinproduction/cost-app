import './CostItem.css';
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = ({date,name,amount}) => {

    return (
        <li className="cost-list__item">
            <Card className="cost-item">
                <CostDate date={date} />
                <div className="cost-item__description">
                    <h2>{name}</h2>
                    <span className="cost-item__price">${amount}</span>
                </div>
            </Card>
        </li>
    );
}
export default CostItem;