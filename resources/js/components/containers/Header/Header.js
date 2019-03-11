import React, {Component} from 'react'
export default class Header extends Component {
    render() {
        return(
            <header className="Header">
                <div className="container">
                    <div className="headerBlock">
                        <div className="mainHeaderText">
                            <h1>
                                Welcome to DrawThink!
                            </h1>
                        </div>
                        <div className="bottomHeaderText">
                            <h5>Thoughts, stories and ideas.</h5>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}