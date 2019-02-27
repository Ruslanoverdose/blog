import React from 'react'
import classes from "../../../containers/MenuContainer/MenuContainer.css";

export default props => {
    return (
        <div className={"searchButton"}>
            <button onClick={props.searchOpened}>
                <i className="fas fa-search"></i>
            </button>
        </div>
    )
}