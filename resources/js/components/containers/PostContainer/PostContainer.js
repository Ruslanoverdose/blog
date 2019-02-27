import React, {Component} from 'react'
import classes from './PostContainer.css'
import previewImg from "../../assets/images/iphone.jpg";
import prevImg from "../../assets/images/grandpa.jpg";
import nextImg from "../../assets/images/woman.jpg";
import mainClasses from '../../App.css'
import {NavLink} from 'react-router-dom'
import articles from '../../articles.json'

export default class PostContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            article: {
                index: 0,
                title: "",
                author : "",
                date : "",
                category : "",
                tags : [
                    
                ],
                shortText : "",
                fullText : "",
                key: 0
            }
        }
    }
    componentDidMount() {
        let a = {}
        articles.map((article, index) => {
            if (parseInt(article.index) === parseInt(this.props.match.params.id)) {
                a = {...article, key: index}
            }
        })
        this.setState({article: a})
    }
    
    render() {
        const iconClass =  " " + "socialIcons"
        const prev = {
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('+ prevImg + ')',
            backgroundSize: '100%',
            height: "200px",
            textAlign: "left"
        }
        const next = {
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('+ nextImg + ')',
            backgroundSize: '100%',
            height: "200px",
            textAlign: "right"
        }
        return(
            <section className="Posts">
                <div className="container">
                    <div className={"PostContainer"}>
                        <div className={"content"}>
                            <article className={"Post"}>
                                <div className={"headerPost"}>
                                    <div className={"Title"}>
                                        <h1>
                                            {this.state.article.title}
                                        </h1>
                                    </div>
                                    <div className={"Meta"}>
                                        <span className={"Date"}><i className="far fa-calendar-alt"></i>
                                        {this.state.article.date}
                                        </span>
                                        <span className={"Comment"}><NavLink to="/benefits-of-rose/#disqus_thread"><i className="far fa-comment-alt"></i>1 Comment</NavLink></span>
                                        <span className={"tagList"}><i className="fas fa-list-ul"></i>{this.state.article.category}</span>
                                    </div>
                                </div>
                                <div className={"articleCover"}>
                                    <img src={previewImg} alt="IPhone"/>
                                </div>
                                <div className={"ArticleText"}>
                                    {this.state.article.fullText}
                                </div>
                            </article>
                            <div className={"otherArticle"}>
                                <div className={"wrap"}>
                                    <div className={"otherOA"} style={prev}>
                                        <NavLink to="">
                                            <div className={"arrow"}>
                                                <i className="fas fa-arrow-left"></i> Previous
                                            </div>
                                            <div className={"titleOA"}>
                                                <h3>Explore The New Asia</h3>
                                            </div>
                                            <div className={"descOA"}>
                                                <p>
                                                    Close your eyes and you can almost see it emerge from the deep, sparkling sea
                                                </p>
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className={"otherOA"} style={next}>
                                        <NavLink to="">
                                            <div className={"arrow"}>
                                                Next <i className="fas fa-arrow-right"></i> 
                                            </div>
                                            <div className={"titleOA"}>
                                                <h3>Explore The New Asia</h3>
                                            </div>
                                            <div className={"descOA"}>
                                                <p>
                                                    Close your eyes and you can almost see it emerge from the deep, sparkling sea
                                                </p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="Sidebar">
                            <div className={"Author"}>
                            <div className={"avatar"}>
                                <img src="http://avant.gbjsolution.com/content/images/2018/04/Surabhi-Gupta.jpg" alt=""/>
                            </div>
                            <div className={"AuthorName"}>
                                Ruslan Bekshenev
                            </div>
                            <div className={"socialInfo"}>
                                <ul className={"Social"}>
                                    <li>
                                        <NavLink to="">
                                            <i className="fab fa-vk"></i>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="">
                                            <i className="fab fa-instagram"></i>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="">
                                            <i className="fab fa-telegram-plane"></i>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="">
                                            <i className="fab fa-twitter"></i>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className={"AuthorDesc"}>
                                Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров
                            </div>
                            <div className={"Share"}>
                                <ul className={"SocialMenu"}>
                                    <li>
                                        <NavLink to="" className={"vk" + iconClass}>
                                            <i className="fab fa-vk"></i>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="" className={"twitter" + iconClass}>
                                            <i className="fab fa-twitter"></i>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="" className={"googleplus" + iconClass}>
                                            <i className="fab fa-google-plus-g"></i>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            <div className={"Tags"}>
                                <ul className={"TagsMenu"}>
                                    <li><NavLink to="">Nature</NavLink></li>
                                    <li><NavLink to="">Life</NavLink></li>
                                    <li><NavLink to="">Stories</NavLink></li>
                                    <li><NavLink to="">Me</NavLink></li>
                                    <li><NavLink to="">Best Day</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}