import React, {Component} from 'react'

export default class Pagination extends Component {
    render() {
        return(
            <div className={"Pagination"}>
                <div className={"container"}>
                    <div className={"paginationBlock"}>
                        <div className={"leftSidePagination"}></div>
                        <div className={"countPages"}>
                            Page 1 of 3
                        </div>
                        <div className={"olderPosts"}>
                            <a href="">
                                older posts <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}