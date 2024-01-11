import ListItems from "../employer-list-items/employer-list-items";
import './list-employer.css';

function EmployersListItemAdd({data}) {
    
   const elements = data.map(item => {
        return(
            <ListItems name={item.name} salary={item.salary} increase={item.increase}/>
        )
   })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersListItemAdd;