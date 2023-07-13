import "./CostsFilter.css";

const CostsFilter = ({onChangeYear, year, costs}) => {
    const yearChangeHandler = (event) => {
        onChangeYear(event.target.value);
    };



    return (
        <div className="costs-filter">
            <div className="costs-filter__control">
                <label>Выбор По Году</label>
                <select value={year} onChange={yearChangeHandler}>
                    <option value="all">All</option>
                    {
                        costs.map((cost) => {
                            const year = new Date(cost.date).getFullYear();
                            return <option key={cost.id} value={year}>{year}</option>;
                        })
                    }
                </select>

            </div>
        </div>
    );
};

export default CostsFilter;
