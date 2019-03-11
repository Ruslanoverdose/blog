import React, {Component} from 'react'
import WidgetPosts from "../../../Widgets/WidgetPosts/WidgetPosts";
import TagCloud from "../../../Widgets/TagCloud/TagCloud";
import FollowUs from "../../../Widgets/FollowUs/FollowUs";
import TextWidget from "../../../Widgets/TextWidget/TextWidget";

export default class TopFooter extends Component {
    render() {
        return(
            <div className="TopFooter">
                <div className="container">
                    <div className="TopFooterBlock">
                        <div className="TopFooterColumn1">
                            <WidgetPosts Title={"Recent posts"}/>
                        </div>
                        <div className="TopFooterColumn2">
                            <TagCloud Title={"Tag Cloud"}/>
                            <FollowUs Title={"Follow Us"}/>
                        </div>
                        <div className="TopFooterColumn3">
                            <TextWidget Title={"Text Widget"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}