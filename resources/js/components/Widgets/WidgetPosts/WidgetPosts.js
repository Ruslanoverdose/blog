import React, {Component} from 'react'
import mainClasses from "../Widget.css";
import classes from "./WidgetPosts.css";
import previewImg from "../../assets/images/iphone.jpg";

export default (props) => {

    return(
        <div className={"widget"}>
            <div className={"widgetTitle"}>
                {props.Title}
            </div>
            <div className={"widgetContent"}>
                <div className={"widgetPosts"}>
                    <a href="" className={"widgetPost"}>
                        <div className={"widgetPostPreview"}>
                            <img src={previewImg} alt=""/>
                        </div>
                        <div className={"widgetPostContent"}>
                                <h4>Benefits Of Rose</h4>
                                <div className={"widgetPostDate"}><i className="far fa-clock"></i> September 28, 2015</div>
                        </div>
                    </a>
                    <a href="" className={"widgetPost"}>
                        <div className={"widgetPostPreview"}>
                            <img src={previewImg} alt=""/>
                        </div>
                        <div className={"widgetPostContent"}>
                            <h4>Benefits Of Rose</h4>
                            <div className={"widgetPostDate"}><i className="far fa-clock"></i> September 28, 2015</div>
                        </div>
                    </a>
                    <a href="" className={"widgetPost"}>
                        <div className={"widgetPostPreview"}>
                            <img src={previewImg} alt=""/>
                        </div>
                        <div className={"widgetPostContent"}>
                            <h4>Benefits Of Rose</h4>
                            <div className={"widgetPostDate"}><i className="far fa-clock"></i> September 28, 2015</div>
                        </div>
                    </a>
                    <a href="" className={"widgetPost"}>
                        <div className={"widgetPostPreview"}>
                            <img src={previewImg} alt=""/>
                        </div>
                        <div className={"widgetPostContent"}>
                            <h4>Benefits Of Rose</h4>
                            <div className={"widgetPostDate"}><i className="far fa-clock"></i> September 28, 2015</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}