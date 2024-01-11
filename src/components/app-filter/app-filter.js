import './app-filter.css';

function AppFilter() {
    return(
        <div className="whapper">
            <button
             className="btn btn-light" 
             type="button">
                Всі роботодавці
             </button>

             <button
             className="btn btn-outline-light" 
             type="button">
                На підвищені 
             </button>

             <button
             className="btn btn-outline-light" 
             type="button">
                З/П більше 1000$
             </button>
        </div>
    );
}

export default AppFilter;