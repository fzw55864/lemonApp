import React from "react";

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={this.props.className}>左上登录信息</div>)
    }
}
