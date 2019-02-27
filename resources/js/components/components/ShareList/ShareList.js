import React from 'react'
import classes from './ShareList.css'
import {NavLink} from "react-router-dom";
function ShareList(props) {
    const isOpen = props.isOpen ? "Show" : "Hide"
    const cls = "shareMenu" + " " + isOpen
    return (
        <div className={"shareBlock"}>
            <ul className={cls}>
                <li>
                    <NavLink to="">
                        <div className={"shareMenuGrid"}>
                            <div className={"shareIcon"}>
                                <i className="fab fa-vk"></i>
                            </div>
                            <div className={"shareTitle"}>
                                Вконтакте
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="">
                        <div className={"shareMenuGrid"}>
                            <div className={"shareIcon"}>
                                <i className="fab fa-twitter"></i>
                            </div>
                            <div className={"shareTitle"}>
                                Twitter
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="">
                        <div className={"shareMenuGrid"}>
                            <div className={"shareIcon"}>
                                <i className="fab fa-facebook-f"></i>
                            </div>
                            <div className={"shareTitle"}>
                                Facebook
                            </div>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default ShareList