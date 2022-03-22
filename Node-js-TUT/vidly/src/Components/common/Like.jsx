import React, { Component } from 'react';

class Like extends Component {

    render() {
        let clases = "fa fa-heart"
        if (!this.props.liked) clases += "-o"
        return <i
            onClick={this.props.onClick}
            style={{ cursor: "pointer", color: "red" }}
            className={clases}
            aria-hidden="true"></i>;
    }
}

export default Like;