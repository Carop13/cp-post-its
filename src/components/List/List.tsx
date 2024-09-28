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
        <div>
            <h3>{list.name}</h3>
            <Form
                listId={list.id}
                newInput={newInput}
                onInputChange={handlerInputChange}
                onSubmit={() => setNewInput("")}
            />
            <ul>
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
