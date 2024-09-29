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
        <form onSubmit={handlerSubmit}
        className="flex gap-2 items-center sm:items-center">
            <label className="m-0 font-bold">Search:</label>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Looking for something...."
                className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-purple placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple sm:text-sm sm:leading-6 focus-visible:outline-none shadow-md hover:shadow-lg"
            />
            <button type="submit" className="bg-purple text-white px-4 py-2 rounded-md shadow-md hover:shadow-inner">Search</button>
        </form>
    );
};

export default Search;
