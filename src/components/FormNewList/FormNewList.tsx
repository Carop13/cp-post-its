import { useContext } from "react";
import { ListContext } from "../../contexts/ListContext";

const FormNewList = () => {
    const { newListName, createNewList, handlerNewListName } =
        useContext(ListContext);

    const handlerSubmit = (e: any) => {
        e.preventDefault();
        createNewList(newListName);
    };

    return (
        <form onSubmit={handlerSubmit} aria-label="form-new-list">
            <input
                id="new-list"
                placeholder="Item"
                type="text"
                value={newListName}
                onChange={handlerNewListName}
            />
            <button type="submit">Create New List</button>
        </form>
    );
};

export default FormNewList;
