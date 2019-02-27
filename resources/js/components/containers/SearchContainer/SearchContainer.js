import React, {Component} from 'react'
import mainClasses from '../../App.css'
import classes from './SearchContainer.css'

export default class PostsContainer extends Component {
    render() {
        const show = this.props.searchOpened ? "Show" : "Hidden"
        const cls = "searchContainer" + " " + show
        return(
            <section id="searchContainer" className={cls}>
               <div className={"container"}>
                <div className={"buttonBlock"}>
                    <button className={"Close"} onClick={this.props.isClosed}><i className="fas fa-times"></i></button>
                </div>
                <div className={"searchBlock"}>
                    <div className={"searchTitle"}>
                        <h1>Поиск по сайту</h1>
                    </div>
                    <div className={"searchInf"}>
                        Введите в поле текст для поиска информации, либо хэштег и слово для поиска по тегу
                    </div>
                    <div className={"formBlock"}>
                        <form>
                            <div className={mainClasses.field}>
                                <input type="text" name="searchInput" id="searchInput" placeholder=" " />
                                <label htmlFor="searchInput">Введите запрос</label>
                            </div>
                        </form>
                    </div>
                </div>
               </div>
            </section>
        )
    }
}