import CostForm from "./CostForm";
import './NewCost.css';
import {useState} from "react";
const NewCost = ({onAddCost}) => {
    const [innerForm, setInnerForm] = useState(true)
    const saveCostDataHandler = (inputConstData) => {
        const costData = {
            ...inputConstData,
            id: (Math.floor(Math.random() * 90) + 10).toString()
        }
        onAddCost(costData);
    }

    const cancelCostHandler = () => {
        console.log('123')
        setInnerForm(!innerForm);
    }

    const showFormHandler = () => {
        setInnerForm(!innerForm);
    }


    return(
        <div className="new-cost">

            {innerForm ? <button onClick={showFormHandler} className="add-cost">Добавить новый расход</button> :
                <CostForm onCancel={cancelCostHandler} onSaveConstData={saveCostDataHandler} />
            }



        </div>
    );
}

export default NewCost;