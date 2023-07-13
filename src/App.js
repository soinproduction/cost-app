import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import './components/Costs/CostsFilter.css'
import {useState} from "react";

const INITIAL_COSTS = [
    {
        name: 'Чайник',
        amount: '30',
        date: '2022-03-01',
        id: '20',
    },
    {
        name: 'Скейт',
        amount: '150',
        date: '2021-04-01',
        id: '21',
    },
    {
        name: 'Бочка',
        amount: '220',
        date: '2020-05-01',
        id: '22',
    },
]

function App() {

    const [costs, setCosts] = useState(INITIAL_COSTS);
    const addCostHandler = (newCosts)=> {
        setCosts((prevState)=>{
            return [ newCosts ,...prevState]
        });
    }


  return (
      <>
          <NewCost onAddCost={addCostHandler}/>
          <Costs costs={costs}/>
      </>
  );
}

export default App;
