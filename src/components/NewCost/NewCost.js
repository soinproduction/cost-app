import CostForm from "./CostForm";
import './NewCost.css';
const NewCost = ({onAddCost}) => {

    const saveCostDataHandler = (inputConstData) => {

        const costData = {
            ...inputConstData,
            id: (Math.floor(Math.random() * 90) + 10).toString()
        }
        onAddCost(costData);
    }

    return(
        <div className="new-cost">
            <CostForm onSaveConstData={saveCostDataHandler} />
        </div>
    );
}

export default NewCost;