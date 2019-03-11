import React from 'react'
import arrow from '../../assets/images/arrowUp.png'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TopScroll = (props) => {
    const cls = "TopScroll" + " " + (props.showTopScroll ? "Show" : "Hide")
    return(
        <ReactCSSTransitionGroup
            transitionName="TopScroll"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            <div className={cls}>
                <button onClick={props.onScrollTop}>
                    <img src={arrow}></img>   
                </button>
                
            </div>
        </ReactCSSTransitionGroup>
    ) 
}

export default TopScroll