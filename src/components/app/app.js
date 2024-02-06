import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import AppSearchPanel from '../app-search-panel/app-search';
import AppFilter from '../app-filter/app-filter';
import EmployersListItemAdd from '../employer-list/list-employer';
import AddEmployer from '../add-employer/add-employer';

import './app.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                {name: "Jeff Sutherland", salary: 900, increase: false, id:1},
                {name: "Marie Bell Santa", salary: 1400, increase: false, id:2},
                {name: "Znowu Galya", salary: 2000, increase: false, id:3},
                {name: "Wham", salary: 20000, increase: false, id:4},
            ],
            term: '',
            filter: 'all'
        }

        this.maxId = 4;
    }

    deleteEmployers = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }


    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            like: false,
            id: ++this.maxId
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToogleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToogleLike = (id) => {
        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {...item, like: !item.like}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterGategories = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            case 'bonus':
                return items.filter(item => item.increase);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render () {
        const { data, term, filter } = this.state;
        const employers = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const liked = this.state.data.filter(item => item.like).length;
        const visibleData = this.filterGategories(this.searchEmp(data, term), filter);

        return(
            <div className="app">
                <AppInfo name={employers} increase={increased} like={liked}/>
    
                <div className="search-panel">
                    <AppSearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>
    
                    <EmployersListItemAdd 
                    data={visibleData}
                    onDelete={this.deleteEmployers}
                    onToogleIncrease={this.onToogleIncrease}
                    onToogleLike={this.onToogleLike}/>
                    <AddEmployer onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;