import React from "react";

const FilterPill = ({filter, selected, selectFilter}) => {

    return (
        <div className={"pill " + (selected ? "selected" : "")} onClick={() => selectFilter(filter)}>
            {filter}
        </div>
    );
};

export default FilterPill;