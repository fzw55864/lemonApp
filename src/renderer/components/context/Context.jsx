import React from "react";

export default class Context extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={this.props.className}>中间待构造部分</div>)
    }
}
