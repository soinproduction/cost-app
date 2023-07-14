import Diagram from "../Diagram/Diagram";

const CostDiagram = ({data}) => {

    const months = [...Array(12).keys()].map((monthIndex) => {
        const date = new Date(2000, monthIndex);
        return date.toLocaleString('en-US', { month: 'short' });
    });

    const newData = months.map((month) => {
        return {
            label: month,
            value: 0,
        }
    })

    for (const cost of data) {
        const costMonth = new Date(cost.date).getMonth();
        newData[costMonth].value += cost.amount;
    }

    return(
        <Diagram dataSets={newData}/>
    )
}

export default CostDiagram