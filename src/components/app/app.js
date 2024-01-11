import AppInfo from '../app-info/app-info';
import AppSearchPanel from '../app-search-panel/app-search';
import AppFilter from '../app-filter/app-filter';
import EmployersListItemAdd from '../employer-list/list-employer';
import AddEmployer from '../add-employer/add-employer';

import './app.css';

function App() {

    const data = [
        {name: "Jeff Sutherland", salary: 900, increase: true},
        {name: "Marie Bell Santa", salary: 1400, increase: false},
        {name: "Znowu Galya", salary: 2000, increase: false},
        {name: "Wham", salary: 20000, increase: false},
    ];
    
    return(
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <AppSearchPanel/>
                <AppFilter/>
            </div>

                <EmployersListItemAdd data={data}/>
                <AddEmployer/>
        </div>
    );
}

export default App;