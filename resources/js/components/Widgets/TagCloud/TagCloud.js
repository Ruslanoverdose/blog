import React from 'react'

export default (props) => {
    return(
        <div className={"widget"}>
            <div className={"widgetTitle"}>
                {props.Title}
            </div>
            <div className={"widgetContent"}>
                <div className={"TagCloud"}>
                    <a href="">Getting Started</a>
                    <a href="">Lifestyle</a>
                    <a href="">Music</a>
                    <a href="">Nature</a>
                    <a href="">Sports</a>
                    <a href="">Technology</a>
                    <a href="">Travel</a>
                    <a href="">Video</a>
                </div>
            </div>
        </div>
    )
}