import './CostDate.css'
const CostDate = ({date}) => {
    return(
        <div className="cost-date">
            <span className="cost-date__month">{date.toLocaleString('ru-RU',{month:'long'})}</span>
            <span className="cost-date__year">{date.getFullYear()}</span>
            <span className="cost-date__day">{date.toLocaleString('ru-RU',{day:'2-digit'})}</span>
        </div>
    );
}
export default CostDate;