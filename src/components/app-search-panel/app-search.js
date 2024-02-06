import { Component } from 'react';
import './app-search.css';

class AppSearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    } 

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render () {
        return (
            <div className='search-panel'>
            <input 
            className="search" 
            placeholder="Пошук роботодавців..." 
            type="search" 
            name="text"
            value={this.state.term}
            onChange={this.onUpdateSearch}/>
            </div>
        );
    }
}

export default AppSearchPanel;