import { useContext } from "react";
import { ListContext } from "./contexts/ListContext.tsx";
import { IList } from "./components/List/types.tsx";
import FormNewList from "./components/FormNewList/FormNewList.tsx";
import List from "./components/List/List.tsx";
import Search from "./components/Search/Search.tsx";

function App() {
  const { lists } = useContext(ListContext);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
          <Search />
      </header>
      <main className="flex flex-col gap-8 sm:items-start w-full h-full">
          <h1 className="text-3xl font-bold underline">Some Post Its!!!</h1>
          <FormNewList />
          <div className="flex flex-wrap gap-8 items-center sm:items-start">
              {lists.map((list: IList) => (
                  <List list={list} key={list.id} />
              ))}
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <small className="flex items-center gap-2">Copiright: Carop13 develop</small>
        </footer>
    </div>
  )
}

export default App
