import React from 'react'

export default props => {
    return (
        <div className={"searchButton"}>
            <button onClick={props.searchOpened}>
                <i className="fas fa-search"></i>
            </button>
        </div>
    )
}