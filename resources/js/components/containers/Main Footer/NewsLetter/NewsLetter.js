import React, {Component} from 'react'
import FollowForm from "../../../components/FollowForm/FollowForm";

export default class NewsLetter extends Component {
    render() {
        return(
            <div className="NewsLetter">
                <div className="container">
                    <div className="NewsLetterBlock">
                        <div className="NewsLetterLeft">
                            <h3>
                                STAY UPDATE WITH US !
                            </h3>
                            <p>
                                Subscribe to our newsletter and get update directly in your inbox. You can unsubscribe anytime.
                            </p>
                        </div>
                        <div className="NewsLetterRight">
                            <FollowForm/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}