import React, { Component } from 'react';


class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    componentDidMount() {
        fetch(' https://kickass-sdw-3a.herokuapp.com/api/users')
            .then(function (response) {
                return response.json()
            }).then((user) => {
                this.setState({ users: user });
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }

    render() {
        return (
            <table className="table table-striped" >
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Type</th>
                        <th>Delete</th>
                    </tr>
                    {
                        this.state.users.map(
                            (user, index) => {
                                return <tr key={index}>
                                    <td className = "col-md-12">{user._id}</td>
                                    <td className = "col-md-12">{user.name}</td>
                                    <td className = "col-md-12">{user.age}</td>
                                    <td className = "col-md-12">{user.type}</td>
                                    <td className = "col-md-12">{user._id}</td>

                                </tr>
                            }
                        )
                    }
                </tbody>
            </table>
        )
    }
}

export default ListUsers;