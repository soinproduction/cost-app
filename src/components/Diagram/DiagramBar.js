import './DiagramBar.css';
const DiagramBar = ({label,value, maxValue}) => {

    let barFillHeight = '0%'

    if (maxValue > 0) {
        barFillHeight = Math.round(value / maxValue * 100) + '%';
    }

    return(
        <div className="diagram-bar">
            <p className="diagram-bar__inner">
                <span style={{height: barFillHeight}} className="diagram-bar__fill"></span>
            </p>
            <span className="diagram-bar__label">{label}</span>
        </div>
    );
}

export default DiagramBar