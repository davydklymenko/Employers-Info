import { Component } from 'react'

import './add-employer.scss';

class AddEmployer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.salary) {
            return;
        }

        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }


    render() {
        const { name, salary } = this.state;

        return(
            <div className="app-add-form">
                <h3>Добавте нового роботодавця</h3>
                <form className="add-form d-flex">
                    <input 
                    type="text" 
                    className="form-control new-post-label"
                    name='name'
                    value={name}
                    onChange={this.onValueChange}
                    placeholder="Ім'я"
                     />
    
                    <input 
                    type="number" 
                    className="form-control new-post-label"
                    name='salary'
                    value={salary}
                    onChange={this.onValueChange}
                    placeholder="З/П в $" />
                </form>
    
                <button type="submit" 
                        className="btn btn-outline-light"
                        onClick={this.onSubmit}
                        >Додати</button>
            </div>
        )
    }
}

export default AddEmployer;