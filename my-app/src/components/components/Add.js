import React, { Component } from 'react';

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            type: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
        handleSubmit(e){
            e.preventDefault();
            const { name, age, type } = this.state;
            fetch(' https://kickass-sdw-3a.herokuapp.com/api/user', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name : name,
                    age : age,
                    type : type,
                })
            })
        }

        handleChange(e){
            const target = e.target;
            const value = target.value;
            const nameOfInput = target.name;
            this.setState({[nameOfInput]:value});
        }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange = {this.handleChange} name="name" id="name" />
                    <input type="text" onChange = {this.handleChange} name="age" id="age" />
                    <input type="text" onChange = {this.handleChange} name="type" id="type" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}