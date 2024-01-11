import './app-search.css';

function AppSearchPanel() {
    return (
        <div className="search-panel">
            <input className="search" placeholder="Пошук роботодавців..." type="search" name="text"/>
        </div>
    );
}

export default AppSearchPanel;