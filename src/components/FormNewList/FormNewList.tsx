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
        <form onSubmit={handlerSubmit} 
            aria-label="form-new-list"
            className="flex gap-2 items-center sm:items-center">
            <input
                id="new-list"
                placeholder="Add list..."
                type="text"
                value={newListName}
                onChange={handlerNewListName}
                className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-purple placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple sm:text-sm sm:leading-6 focus-visible:outline-none"
            />
            <button type="submit" className="bg-purple text-white px-4 py-2 rounded-md">Create New List</button>
        </form>
    );
};

export default FormNewList;
