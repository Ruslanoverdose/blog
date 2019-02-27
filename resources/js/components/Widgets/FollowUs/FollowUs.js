import React from 'react'
import mainClasses from "../Widget.css";
import classes from "./FollowUs.css";

export default (props) => {
    const iconClass =  " " + "socialIcons";
    return(
        <div className={"widget"}>
            <div className={"widgetTitle"}>
                {props.Title}
            </div>
            <div className={"widgetContent"}>
               <div className={"FollowUs"}>
                   <ul className={"Social"}>
                       <li>
                           <a href="" className={"vk" + iconClass}>
                               <i className="fab fa-vk"></i>
                           </a>
                       </li>
                       <li>
                           <a href="" className={"instagram" + iconClass}>
                               <i className="fab fa-instagram"></i>
                           </a>
                       </li>
                       <li>
                           <a href="" className={"telegram" + iconClass}>
                               <i className="fab fa-telegram-plane"></i>
                           </a>
                       </li>
                       <li>
                           <a href="" className={"twitter" + iconClass}>
                               <i className="fab fa-twitter"></i>
                           </a>
                       </li>
                   </ul>

               </div>
            </div>
        </div>
    )
}