import ListItems from "../employer-list-items/employer-list-items";
import './list-employer.css';

function EmployersListItemAdd({data, onDelete, onToogleIncrease,onToogleLike }) {
    
   const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <ListItems key={id}
                       {...itemProps}
                       onDelete={() => onDelete(id)}
                       onToogleIncrease={() => onToogleIncrease(id)}
                       onToogleLike={() => onToogleLike(id)}
                       />
        )
   })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersListItemAdd;
