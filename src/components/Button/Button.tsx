import { ButtonProps } from "./types.tsx";
import PencilIcon from '../../assets/pencil-icon.svg';
import TrashIcon from '../../assets/trash-icon.svg';

const Button = ({ label, onClick = () => {} }: ButtonProps) => {
    const labelToIcon = () => {
        if (label === 'Delete') {
            return <img src={TrashIcon} />
        } else if  (label === 'Edit') {
            return <img src={PencilIcon} />
        } else {
            return label;
        }
    }

    return <button 
    onClick={onClick}
    className="bg-white text-purple px-3 py-1 rounded-md border-purple border-2 text-sm font-medium shadow-md hover:shadow-inner">
        {labelToIcon()}
    </button>;
};

export default Button;
