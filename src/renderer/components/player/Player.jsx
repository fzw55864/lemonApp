import React from "react";

export default class Player extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={this.props.className}>下部播放栏</div>)
    }
}
