import React from "react";

export default class Search extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={this.props.className}>上方查询部分</div>)
    }
}
