import './CostDate.css'
const CostDate = ({date}) => {
    return(
        <div className="cost-date">
            <div className="cost-date__month">{date.toLocaleString('ru-RU',{month:'long'})}</div>
            <div className="cost-date__year">{date.getFullYear()}</div>
            <div className="cost-date__day">{date.toLocaleString('ru-RU',{day:'2-digit'})}</div>
        </div>
    );
}
export default CostDate;