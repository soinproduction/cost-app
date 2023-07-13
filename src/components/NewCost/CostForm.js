import './CostForm.css';
import {useState} from "react";

const CostForm = ({onSaveConstData}) => {

   const [userInput,setUserInput] = useState({
        name: '',
        amount:'',
        date:''
    })

    const {name,amount,date} = userInput;

    const nameChangeHandler = (e) => {
        setUserInput((prevState)=>{
            return {
                ...prevState,
                name: e.target.value,
            }
        })
    };
    const amountChangeHandler = (e) => {
        setUserInput((prevState)=>{
            return {
                ...prevState,
                amount: e.target.value,
            }
        })
    };
    const dateChangeHandler = (e) => {
        setUserInput((prevState)=>{
            return {
                ...prevState,
                date: e.target.value,
            }
        })
    };
    const submitHandler = (e) => {
        e.preventDefault();

         setUserInput({
            name: '',
            amount:'',
            date:''
        });

        onSaveConstData(userInput)
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" value={name} onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" value={date} onChange={dateChangeHandler}  />
                </div>
                <div className="new-cost__actions">
                    <button type="submit">
                        Добавить расход
                    </button>
                </div>
            </div>
        </form>
    );
}

export default CostForm;