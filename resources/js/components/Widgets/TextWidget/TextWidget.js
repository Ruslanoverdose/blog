import React from 'react'
import mainClasses from "../Widget.css";
import classes from "./TextWidget.css";

export default (props) => {
    return(
        <div className={"widget"}>
            <div className={"widgetTitle"}>
                {props.Title}
            </div>
            <div className={"widgetContent"}>
                <div className={"TextWidget"}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A in praesentium quae quod reiciendis repellat temporibus ut. Amet assumenda consequatur cupiditate et magni, possimus, quam quidem rem repellat totam vel.
                    </p>
                </div>
            </div>
        </div>
    )
}