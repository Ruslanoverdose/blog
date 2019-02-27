import React, {Component} from 'react'
import mainClasses from '../../App.css'
import classes from './PostsContainer.css'
import Posts from "../../components/Posts/Posts";
import Pagination from "../../components/Pagination/Pagination";
import articles from '../../articles.json'

export default class PostsContainer extends Component {
    render() {
        return(
            <section id="Posts" className={"Posts"}>
               <div className={"container"}>
                    <div className={"postsBlock"}>
                    {
                        articles.map((article, index) => {
                            return (
                                <Posts 
                                    key = {index}
                                    index={article.index}
                                    title={article.title} 
                                    author={article.author} 
                                    date={article.date} 
                                    category={article.category} 
                                    short={article.shortText} 
                                    tags={article.tags}
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