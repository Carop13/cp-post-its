export interface ItemProps {
    item: IItem;
    onChange?: () => void;
    listId: string;
    onEdit: (text: string) => void;
}

export interface IItem {
    readonly id: string;
    text: string;
    checked?: boolean;
}
