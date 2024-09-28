import { useContext } from "react";
import { ListContext } from "../../contexts/ListContext.tsx";
import { FormProps } from "./types.tsx";

const Form = ({ listId, onInputChange, newInput, onSubmit }: FormProps) => {
    const { handlerActions } = useContext(ListContext);

    const handlerSubmit = (e: any) => {
        e.preventDefault();
        handlerActions(listId, newInput);
        onSubmit();
    };

    return (
        <form 
            onSubmit={handlerSubmit} 
            aria-label="form-test"
            className="flex gap-2 items-center sm:items-center">
            <input
                id="gato"
                placeholder="Add item..."
                type="text"
                value={newInput}
                onChange={onInputChange}
                className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-purple placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple sm:text-sm sm:leading-6 focus-visible:outline-none"
            />
            <button type="submit" className="bg-purple text-white px-4 py-2 rounded-md">Save item</button>
        </form>
    );
};

export default Form;
