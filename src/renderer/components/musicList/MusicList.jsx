import React from "react";

export default class MusicList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={this.props.className}>右侧music列表</div>)
    }
}
