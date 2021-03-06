import React, {Component} from 'react'
import previewImg from "../../assets/images/iphone.jpg";
import {NavLink} from "react-router-dom";
import ShareList from '../ShareList/ShareList';
import axios from 'axios';

export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuShareIsOpen: false, 
            category: []
        }

        this.openMenu = this.openMenu.bind(this)
    }
    openMenu() {
        this.setState({
            menuShareIsOpen: this.state.menuShareIsOpen ? false : true
        })
    }
    componentDidMount() {
        axios.get('/api/articles/'+ this.props.index)
            .then(cat => {
                const c = {...cat.data[1]}
                this.setState({category: c})
            })
            .catch(function(error) {
                console.log(error)
            })
    }
    render() {
        return(
            <div className={"cardPost"}>
                <div className={"preview"}>
                    <img src={previewImg} alt=""/>
                </div>
                <div className={"content"}>
                    <div className={"postTitle"}>
                        <NavLink to="">
                            {this.props.title}
                        </NavLink>
                    </div>
                    <div className={"postMeta"}>
                        <span className={"Date"}><i className="far fa-calendar-alt"></i>{this.props.date}</span>
                        <span className={"Comment"}><NavLink to="/benefits-of-rose/#disqus_thread"><i className="far fa-comment-alt"></i>1 Comment</NavLink></span>
                        <span className={"tagList"}>
                        <i className="fas fa-list-ul"></i>
                            {
                                this.state.category.title
                            }                            
                        </span>
                    </div>
                    <div className={"postDesc"}>
                        {this.props.short}
                        <ShareList isOpen={this.state.menuShareIsOpen}/>
                    </div>
                </div>
                <div className={"cardFooter"}>
                    <div className={"readMore"}>
                        <NavLink to={"/articles/" + this.props.index}>
                            read more <i className="fas fa-arrow-right"></i>
                        </NavLink>

                    </div>
                    <div className={"share"}>
                        <button onClick={this.openMenu}>
                            <i className="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}