import React, {Component} from 'react'
import Posts from "../../components/Posts/Posts";
import Pagination from "../../components/Pagination/Pagination";

export default class PostsContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            articles: [],
        }
    }
    componentDidMount() {
        axios.get('/api/')
        .then(response => {
            this.setState({articles: response.data})
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