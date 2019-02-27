import React, {Component} from 'react'
import classes from './BottomFooter.css'
import CopyRight from "../../../components/CopyRight/CopyRight";

export default class BottomFooter extends Component {
    render() {
        return(
            <div className="BottomFooter">
                <CopyRight/>
            </div>
        )
    }
}