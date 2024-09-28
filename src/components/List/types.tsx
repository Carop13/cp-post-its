import { IItem } from "../Item/types.tsx";

export interface IList {
    readonly id: string;
    name: string;
    items: IItem[];
    listColor?: string;
}

export interface ListProps {
    list: IList;
}
