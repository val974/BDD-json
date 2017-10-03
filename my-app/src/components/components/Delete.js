import React, { Component } from 'react'

export default class Delete extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <a href={'https://kickass-sdw-3a.herokuapp.com/api/users' + this.props.id} className="btn btn-danger" onclick={this.handleClick}></a>
            </div>
        )
    }
}
