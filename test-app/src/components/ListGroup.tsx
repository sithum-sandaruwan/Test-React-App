import { MouseEvent } from "react";
function ListGroup() {

    let items = ["Item 1", "Item 2", "Item 3"];

    const handleClick =  (event : MouseEvent) => console.log(event)
    return (
        <>
            <h1>List Group</h1>
            {items.length === 0 && <p>No Item Found</p>}
            <ul className="list-group">
                {items.map(item => (<li className="list-group-item" key={item}
                    onClick={handleClick}> {item}</li>))}
            </ul>
        </>

    );

}

export default ListGroup;