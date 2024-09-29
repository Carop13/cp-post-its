import Button from "../Button/Button.tsx";
import { ItemProps } from "./types.tsx";
import { useContext } from "react";
import { ListContext } from "../../contexts/ListContext.tsx";

const Item = ({ item, listId, onEdit }: ItemProps) => {
    const { handlerDelete, handlerCheck, handlerEdit } =
        useContext(ListContext);

    return (
        <li className="flex justify-between w-full gap-2">
            <div className="flex items-center gap-2 flex-grow">
                <label className="cursor-pointer shadow-md max-w-xs flex p-3 w-full bg-white border border-gray-100 rounded-lg text-sm font-medium hover:shadow-lg" htmlFor={`${item.id}`}>
                    <input
                        name={`${item.id}`}
                        type="checkbox"
                        checked={item.checked}
                        onChange={(e) => handlerCheck(listId, item.id, e)}
                        id={`${item.id}`}
                        className="shrink-0 mt-0.5 border-gray-100 rounded disabled:opacity-50 disabled:pointer-events-none"
                    />
                    <span className="text-sm ms-3">{item.text}</span>
                </label>
            </div>
            <div className="flex gap-2 flex-grow-0">
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
