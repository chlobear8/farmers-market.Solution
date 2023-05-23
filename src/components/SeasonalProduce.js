import React from "react";
import PropTypes from "prop-types";

function SeasonalProduce(props) {
    return (
        <React.Fragment>
            <h3>{props.month}</h3>
            {props.selection.map(e=><li>{e}</li>)}
        </React.Fragment>
    );
}

SeasonalProduce.propTypes = {
    month: PropTypes.string,
    selection: PropTypes.array,
};

export default SeasonalProduce;

// {j.desc.map(paragraph => <p>{paragraph}</p>)}