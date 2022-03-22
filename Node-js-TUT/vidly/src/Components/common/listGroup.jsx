import React from 'react';
const ListGroup = (props) => {
    const { items, taxtProperty, vlaueProperty, onItemSelect, selectedItem } = props
    return (

        <ul className="list-group">
            {items.map(item => (
                <li
                    onClick={() => onItemSelect(item)}
                    key={item[vlaueProperty]}//if you don't no key value then used brscket notation
                    className={item === selectedItem ? "list-group-item active" : "list-group-item"}
                >
                    {item[taxtProperty]}
                </li>
            ))}

        </ul>
    );
}
//filtering Default props
ListGroup.defaultProps = {
    taxtProperty: "name",
    vlaueProperty: "_id"
}
export default ListGroup;