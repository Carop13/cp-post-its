import Button from "../Button/Button.tsx";
import { ItemProps } from "./types.tsx";
import { useContext } from "react";
import { ListContext } from "../../contexts/ListContext.tsx";

const Item = ({ item, listId, onEdit }: ItemProps) => {
    const { handlerDelete, handlerCheck, handlerEdit } =
        useContext(ListContext);

    return (
        <li>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={(e) => handlerCheck(listId, item.id, e)}
                id={`${item.id}`}
            />
            {item.text}
            <Button
                label="Delete"
                onClick={() => handlerDelete(listId, item.id)}
            />
            <Button
                label="Edit"
                onClick={() => {
                    handlerEdit(item.id, item.text);
                    onEdit(item.text);
                }}
            />
        </li>
    );
};

export default Item;
