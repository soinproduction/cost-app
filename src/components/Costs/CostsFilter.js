import "./CostsFilter.css";

const CostsFilter = ({onChangeYear, year}) => {
    const yearChangeHandler = (event) => {
        onChangeYear(event.target.value);

    };

    return (
        <div className="costs-filter">
            <div className="costs-filter__control">
                <label>Выбор По Году</label>
                <select value={year} onChange={yearChangeHandler}>
                    <option value="all">All</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default CostsFilter;
