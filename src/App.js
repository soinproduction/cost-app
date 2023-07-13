import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import CostsFilter from "./components/Costs/CostsFilter";
import './components/Costs/CostsFilter.css'
import {useState} from "react";
import costForm from "./components/NewCost/CostForm";

function App() {

    const [costs, setCosts] = useState([]);
    const addCostHandler = (newCosts)=> {
        setCosts([newCosts]);
    }


  return (
      <>

          <NewCost onAddCost={addCostHandler}/>
          <Costs costs={costs}/>
      </>
  );
}

export default App;
