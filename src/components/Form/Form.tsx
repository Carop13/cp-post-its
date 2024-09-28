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
        <form onSubmit={handlerSubmit} aria-label="form-test">
            <input
                id="gato"
                placeholder="Item"
                type="text"
                value={newInput}
                onChange={onInputChange}
            />
            <button type="submit">Save item</button>
        </form>
    );
};

export default Form;
