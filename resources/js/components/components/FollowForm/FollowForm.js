import React, {Component} from 'react'
import formClasses from "./FollowForm.css";
import appCss from "./../../App.css";

export default class FollowForm extends Component {
    render() {
        return(
            <div className={"FollowForm"}>
                <form action="">
                    <div className={"field"}>
                        <input type="text" name="Email" id="Email" placeholder=" " />
                        <label htmlFor="Email">Your Email</label>
                    </div>
                </form>
            </div>
        )
    }
}