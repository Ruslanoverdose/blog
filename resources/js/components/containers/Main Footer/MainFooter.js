import React, {Component} from 'react'
import NewsLetter from "./NewsLetter/NewsLetter";
import TopFooter from "./TopFooter/TopFooter";
import BottomFooter from "./BottomFooter/BottomFooter";

export default class MainFooter extends Component {
    render() {
        return(
            <footer id="MainFooter" className="MainFooter">
                <NewsLetter/>
                <TopFooter/>
                <BottomFooter/>
            </footer>
        )
    }
}