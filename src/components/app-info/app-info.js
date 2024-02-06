import './app-info.css';

function AppInfo({name, increase, like}) {
    return (
        <div className="app-info">
            <h1>Список Інформації Роботодавців в N</h1>
            <h2>Кількість роботодавців: {name}</h2>
            <h3>Кількість премій: {increase}</h3>
            <h4 style={{fontFamily: 'cursive'}}>Кількість улюблених: {like}</h4>
        </div>
    );
}

export default AppInfo;