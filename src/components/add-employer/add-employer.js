import './add-employer.css';

function AddEmployer() {
    return(
        <div className="app-add-form">
            <h3>Добавте нового роботодавця</h3>
            <form 
            className="add-form d-flex">
                <input 
                type="text" 
                className="form-control new-post-label"
                placeholder="Ім'я" />

                <input 
                type="number" 
                className="form-control new-post-label"
                placeholder="З/П в $" />
            </form>

            <button type="submit" className="btn btn-outline-light">Додати</button>
        </div>
    );
}

export default AddEmployer;