import { useContext } from "react";
import { ListContext } from "./contexts/ListContext.tsx";
import { IList } from "./components/List/types.tsx";
import FormNewList from "./components/FormNewList/FormNewList.tsx";
import List from "./components/List/List.tsx";
import Search from "./components/Search/Search.tsx";
import './App.css'

function App() {
  const { lists } = useContext(ListContext);

  return (
    <>
       <main
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <div>
                <h1>Some Post Its!!!</h1>
                <Search />
                <hr />
                <FormNewList />
                {lists.map((list: IList) => (
                    <List list={list} key={list.id} />
                ))}
            </div>
        </main>
    </>
  )
}

export default App
