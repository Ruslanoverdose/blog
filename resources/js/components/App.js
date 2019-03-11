import React, { Component } from 'react';
import Header from './containers/Header/Header'
import MenuContainer from "./containers/MenuContainer/MenuContainer";
import PostsContainer from "./containers/PostsContainer/PostsContainer";
import MainFooter from "./containers/Main Footer/MainFooter";
import {Route, Switch, Redirect} from "react-router-dom";
import PostContainer from "./containers/PostContainer/PostContainer";
import SearchContainer from "./containers/SearchContainer/SearchContainer";
import TopScroll from "./components/TopScroll/TopScroll";

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        searchOpened: false,
        isFixed : false,
        showTopScroll : false
      }
      this.searchIsOpened = this.searchIsOpened.bind(this)
    }
    searchIsOpened() {
      this.setState({
        searchOpened: this.state.searchOpened ? false : true
      })
    } 

    componentDidMount() {
      window.addEventListener('scroll', () => this.handleScroll())
    }
    handleScroll() {
        const scroll = document.documentElement.scrollTop
        this.setState({
          isFixed : scroll >= 100 ? true : false,
          showTopScroll: scroll >= 200 ? true : false
        })
    }
    onScrollTop() {
      document.documentElement.scrollTop = 0
    }
    render() {
    return (
      <div className={"wrapper"}>
            <MenuContainer searchOpened ={this.searchIsOpened} isFixed={this.state.isFixed}/>
            <Header/>
            <Switch>
                <Route path={"/articles/:id"} exact component={PostContainer}/>
                <Route path={"/articles"} exact component={PostsContainer}/>
                <Route path={"/about"}/>
                <Route path={"/contact"}/>
                <Route path={"/tags"}/>
                <Route path={"/404"}/>
                <Route path={"/"} exact component={PostsContainer}/>
                <Redirect to={"/"}/>
            </Switch>
            <MainFooter/>
            <SearchContainer searchOpened={this.state.searchOpened} isClosed={this.searchIsOpened}/>
            <TopScroll showTopScroll={this.state.showTopScroll} onScrollTop={this.onScrollTop}/>
      </div>
    );
  }
}

export default App;
