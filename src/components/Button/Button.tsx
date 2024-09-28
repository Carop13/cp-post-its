import { ButtonProps } from "./types.tsx";

const Button = ({ label, onClick = () => {} }: ButtonProps) => {
    return <button onClick={onClick}>{label}</button>;
};

export default Button;
