import { createContext, useState, ReactNode, useMemo } from "react";
import uuid from "react-uuid";
import { IList } from "../components/List/types"; 

interface IListContext {
    lists: IList[];
    newListName: string;
    handlerActions: (listID: string, text: string) => void;
    handlerDelete: (listID: string, id: string) => void;
    handlerCheck: (listID: string, id: string, e: any) => void;
    handlerEdit: (id: any, text: string) => void;
    createNewList: (name: string) => void;
    handlerNewListName: (e: any) => void;
    handlerSearch: (test: string) => void;
}

const defaultListContext = {
    lists: [],
    newListName: "",
    handlerActions: (listID: string, text: string) => {},
    handlerDelete: (listID: string, id: string) => {},
    handlerCheck: (listID: string, id: string, e: any) => {},
    handlerEdit: (id: any, text: string) => {},
    createNewList: (name: string) => {},
    handlerNewListName: (e: any) => {},
    handlerSearch: (test: string) => {},
};

const ListContext = createContext<IListContext>(defaultListContext);

const ListProvider = ({ children }: { children: ReactNode }) => {
    const [lists, setLists] = useState<IList[]>([]);
    const [newListName, setNewListName] = useState("");
    const [idToEdit, setIdToEdit] = useState("");
    const [searchText, setSearchText] = useState("");
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const colorArr = ['bg-pale-green', 'bg-pale-yello', 'bg-pale-red', 'bg-pale-purple', 'bg-pale-blue']; 

    const handlerAdd = (listID: string, text: string) => {
        setLists((prevLists) =>
            prevLists.map((list) => {
                if (list.id === listID) {
                    return {
                        ...list,
                        items: [
                            ...list.items,
                            {
                                id: uuid(),
                                text,
                                checked: false,
                                onEdit: false,
                            },
                        ],
                    };
                } else {
                    return list;
                }
            })
        );
        setIdToEdit("");
    };

    const handlerEditItem = (listID: string, text: string) => {
        setLists((prevLists) =>
            prevLists.map((list) => {
                if (list.id === listID) {
                    return {
                        ...list,
                        items: list.items.map((item) =>
                            item.id === idToEdit
                                ? { ...item, text: text }
                                : item
                        ),
                    } as IList;
                } else {
                    return list;
                }
            })
        );
        setIdToEdit("");
    };

    const handlerActions = (listID: string, text: string) => {
        if (idToEdit) {
            handlerEditItem(listID, text);
        } else {
            handlerAdd(listID, text);
        }
    };

    const handlerDelete = (listID: string, id: string) => {
        setLists((prevLists) =>
            prevLists.map((list) => {
                if (list.id === listID) {
                    return {
                        ...list,
                        items: list.items.filter((item) => item.id !== id),
                    } as IList;
                } else {
                    return list;
                }
            })
        );
    };

    const handlerCheck = (listID: string, id: string, e: any) => {
        setLists((prevLists) =>
            prevLists.map((list) => {
                if (list.id === listID) {
                    return {
                        ...list,
                        items: list.items.map((item) =>
                            item.id === id
                                ? { ...item, checked: e.target.checked }
                                : item
                        ),
                    } as IList;
                } else {
                    return list;
                }
            })
        );
    };

    const handlerEdit = (id: string, text: string) => {
        setIdToEdit(id);
    };

    const createNewList = (name: string) => {
        setLists((prevState) => [
            ...prevState,
            {
                id: uuid(),
                name: `${name || "Lista #" + (lists.length + 1)}`,
                items: [],
                listColor: getColor(currentColorIndex)
            } as IList,
        ]);
        setCurrentColorIndex(changeCurrentColorIndex)
        setNewListName("");
    };

    const handlerNewListName = (e: any) => {
        setNewListName(e.target.value);
    };

    const handlerSearch = (text: string) => {
        setSearchText(text);
    };

    const changeCurrentColorIndex = () => {
        if (currentColorIndex + 1 === colorArr.length) {
            return 0
        }
        return currentColorIndex + 1;
    }

    const getColor = (currentIndex: number) => {
        return colorArr[currentIndex]; 
    }

    const filteredList = useMemo(() => {
        if (searchText != "") {
            return lists.filter((list) =>
                list.items.find((item) => item.text.includes(searchText))
            );
        } else {
            return lists;
        }
    }, [searchText, lists]);

    return (
        <ListContext.Provider
            value={{
                lists: filteredList,
                newListName,
                handlerActions,
                handlerDelete,
                handlerCheck,
                handlerEdit,
                createNewList,
                handlerNewListName,
                handlerSearch,
            }}
        >
            {children}
        </ListContext.Provider>
    );
};

export { ListProvider, ListContext };
