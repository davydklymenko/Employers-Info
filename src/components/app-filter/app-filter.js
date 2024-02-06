import './app-filter.css';

function AppFilter(props) {
   const buttonsData = [
      {name:'all', label:'Всі роботодавці'},
      {name:'like', label:'Улюблені'},
      {name:'moreThan1000', label:'З/П більше 1000$'},
      {name:'bonus', label:'Всі хто з преміями'}
   ];

   const buttons = buttonsData.map(({name, label}) => {
      const active = props.filter === name;
      const clazz = active ? 'btn-light' : 'btn-outline-light';
      return (
         <button
              type="button"
              className={`btn ${clazz}`} 
              key={name}
              onClick={() => props.onFilterSelect(name)}>
              {label}
              </button>
      );
   })

      return(
         <div className="whapper">
            {buttons}
         </div>
      );
}

export default AppFilter;