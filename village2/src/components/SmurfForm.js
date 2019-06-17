import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

   
    addSmurf = event => {
        event.preventDefault();
        // add code to create the smurf using the api
        axios
            .post(`http://localhost:3333/smurfs`, this.state)
            .then(response => this.props.updateSmurfs(response.data))
            .catch(error => console.log(error));

        this.setState({
            name: "",
            age: "",
            height: ""
        });
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

   

    render() {
        return (
            <div className="SmurfForm">
                <form onSubmit={this.addSmurf}>

                    <div className="form-group row">
                        <label className='col-sm-2 col-form-label'>Smurf Name:</label>
                        <input
                            className="form-control col-sm-4"
                            type="text"
                            onChange={this.handleInputChange}
                            placeholder="name"
                            value={this.state.name}
                            name="name"
                        />
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Age:</label>
                        <input
                            className="form-control col-sm-4"
                            onChange={this.handleInputChange}
                            placeholder="age"
                            value={this.state.age}
                            name="age"
                        />
                    </div>

                    <div className="form-group row">
                        <label className='col-sm-2 col-form-label'>height:</label>
                        <input
                            className="form-control col-sm-4"
                            onChange={this.handleInputChange}
                            placeholder="height"
                            value={this.state.height}
                            name="height"
                        />
                    </div>
                    <button type="submit">Add to the village</button>
                </form>
            </div>
        );
    }
}

export default SmurfForm;
