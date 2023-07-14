import './Diagram.css';
import DiagramBar from "./DiagramBar";

const Diagram = ({dataSets}) => {
    const datasetsValue = dataSets.map((dataSet) => +dataSet.value)
    const maxValue = Math.max(...datasetsValue);


    console.log(dataSets);

    return(
        <div className='diagram'>
            {dataSets.map((dataSet,index) =>
                <DiagramBar
                    key={index}
                    label={dataSet.label}
                    maxValue={maxValue}
                    value={dataSet.value}/>
            )}
        </div>
    )
}

export default Diagram