import React from 'react';
import classes from "../../containers/MenuContainer/MenuContainer.css";
import {NavLink} from "react-router-dom";

export default () => {
        return(
            <div className={"menu"}>
                <nav>
                    <ul>
                        <li><NavLink to={"/"} >Home</NavLink> </li>
                        <li><NavLink to={"/single"}>Single</NavLink></li>
                        <li><NavLink to={"/tags"}>Tag Archive</NavLink></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                        <li><NavLink to={"/404"}>404</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
}