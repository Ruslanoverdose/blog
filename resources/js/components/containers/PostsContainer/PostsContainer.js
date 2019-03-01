import React, {Component} from 'react'
import mainClasses from '../../App.css'
import classes from './PostsContainer.css'
import Posts from "../../components/Posts/Posts";
import Pagination from "../../components/Pagination/Pagination";
import articles from '../../articles.json'

export default class PostsContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            articles: [],
        }
    }
    componentDidMount() {
        fetch('/api/')
        .then(response => {
            return response.json()
        })
        .then(articles => {
            this.setState({articles: articles })
        });
    }
    render() {
        return(
            <section id="Posts" className={"Posts"}>
               <div className={"container"}>
                    <div className={"postsBlock"}>
                    {
                        this.state.articles.map((article, index) => {
                            return (
                                <Posts 
                                    key = {index}
                                    index={article.id}
                                    title={article.title} 
                                    category={article.category_id} 
                                    short={article.shortText} 
                                    full={article.fullText} 
                                    cover={article.cover} 
                                />
                            )
                        })
                    }
                    </div>
                    <Pagination />
               </div>
            </section>
        )
    }
}