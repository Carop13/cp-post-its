import Button from "../Button/Button.tsx";
import { ItemProps } from "./types.tsx";
import { useContext } from "react";
import { ListContext } from "../../contexts/ListContext.tsx";

const Item = ({ item, listId, onEdit }: ItemProps) => {
    const { handlerDelete, handlerCheck, handlerEdit } =
        useContext(ListContext);

    return (
        <li className="flex justify-between w-full">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) => handlerCheck(listId, item.id, e)}
                    id={`${item.id}`}
                />
                <p className="text-lg font-medium">{item.text}</p>
            </div>
            <div className="flex gap-2">
                <Button
                    label="Edit"
                    onClick={() => {
                        handlerEdit(item.id, item.text);
                        onEdit(item.text);
                    }}
                />
                <Button
                    label="Delete"
                    onClick={() => handlerDelete(listId, item.id)}
                />
            </div>
        </li>
    );
};

export default Item;
