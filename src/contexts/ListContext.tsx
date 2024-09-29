import { createContext, useState, ReactNode, useMemo, useEffect } from "react";
import uuid from "react-uuid";
import { IList } from "../components/List/types"; 

interface IListContext {
    lists: IList[];
    newListName: string;
    handlerActions: (listID: string, text: string) => void;
    handlerDelete: (listID: string, id: string) => void;
    handlerCheck: (listID: string, id: string, e: any) => void;
    handlerEdit: (id: any) => void;
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
    handlerEdit: (id: any) => {},
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
                    const count = e.target.checked ? 1 : -1;
                    return  {
                        ...list,
                        items: list.items.map((item) => {
                            return item.id === id
                            ? { ...item, checked: e.target.checked }
                            : item
                        }
                        ),
                        checkCount: list.checkCount + count,
                        strikethrough: (list.checkCount + count) === list.items.length ? 1 : 0
                    }; 
                } else {
                    return list;
                }
            }).sort((listA, listB) => listA.strikethrough - listB.strikethrough)
        );
    };

    const handlerEdit = (id: string) => {
        setIdToEdit(id);
    };

    const createNewList = (name: string) => {
        const newUuid = uuid();
        const nameList = "Lista #" + (lists.length + 1);
        setLists((prevState) => [
            ...prevState,
            {
                id: newUuid,
                name: `${name || nameList}`,
                items: [],
                listColor: getColor(currentColorIndex),
                checkCount: 0,
                strikethrough: 0
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
