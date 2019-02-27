import React, {Component} from 'react'
import classes from './MenuContainer.css'
import mainClasses from '../../App.css'
import Menu from "../../components/Menu/Menu";
import ButtonSearch from "../../components/Search/ButtonSearch/ButtonSearch";
export default class MenuContainer extends Component {
    render() {
        return(
            <section id="menucontainer" className={this.props.isFixed ? "MenuContainerFixed" : "MenuContainer"}>
                <div className="container">
                    <div className="row">
                        <div className="logo">
                            <h5>Draw Think</h5>
                        </div>
                        <Menu/>
                        <ButtonSearch searchOpened={this.props.searchOpened}/>
                    </div>
                </div>
            </section>
        )
    }
}