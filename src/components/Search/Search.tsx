import { ListContext } from "../../contexts/ListContext.tsx";
import { useContext, useState } from "react";

const Search = () => {
    const [input, setInput] = useState("");
    const { handlerSearch } = useContext(ListContext);

    const handlerSubmit = (e: any) => {
        e.preventDefault();
        handlerSearch(input);
    };

    return (
        <form onSubmit={handlerSubmit}>
            <label>Search:</label>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
