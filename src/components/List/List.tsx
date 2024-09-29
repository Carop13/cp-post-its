import { ListProps } from "./types.tsx";
import { IItem } from "../Item/types.tsx";
import Item from "../Item/Item";
import Form from "../Form/Form.tsx";
import { useState } from "react";
 
const List = ({ list }: ListProps) => {
    const [newInput, setNewInput] = useState("");

    const handlerInputChange = (e: any) => {
        setNewInput(e.target.value);
    };

    const onEdit = (text: string) => {
        setNewInput(text);
    };

    return (
        <div id={list.id} 
            className={`flex flex-col gap-6 items-center sm:items-start 
            p-8 rounded-xl ${list.listColor} shadow-md 
            border-2 border-gray-100
            hover:border-2 hover:border-black
            target:border-2 target:border-black`} >
            <h3 className="text-2xl font-bold">{list.name}</h3>
            <Form
                listId={list.id}
                newInput={newInput}
                onInputChange={handlerInputChange}
                onSubmit={() => setNewInput("")}
            />
            <ul className="w-full flex flex-col gap-4 items-center sm:items-start">
                {list.items.map((item: IItem) => (
                    <Item
                        item={item}
                        key={item.id}
                        listId={list.id}
                        onEdit={onEdit}
                    />
                ))}
            </ul>
        </div>
    );
};

export default List;
