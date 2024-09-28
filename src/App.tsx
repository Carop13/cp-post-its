import { useContext } from "react";
import { ListContext } from "./contexts/ListContext.tsx";
import { IList } from "./components/List/types.tsx";
import FormNewList from "./components/FormNewList/FormNewList.tsx";
import List from "./components/List/List.tsx";
import Search from "./components/Search/Search.tsx";

function App() {
  const { lists } = useContext(ListContext);
  const asideList = [...lists];

  const loadList = (id: string) => {
    console.log('id: ', id);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
          <Search />
      </header>
      <main className="flex flex-col gap-8 sm:items-start w-full h-full">
          <h1 className="text-3xl font-bold underline">Some Post Its!!!</h1>
          <FormNewList />
          <section className="flex gap-9 sm:items-start w-full h-full">
            <aside className="w-72 bg-gray-50 border border-gray-100">
              <nav className="sm:items-start w-full grid grid-cols-1 divide-y">
                {asideList.map((list: IList) => (
                  <a key={list.id} onClick={() => loadList(list.id)}
                      className="flex justify-between sm:items-center w-full py-3 px-4 hover:bg-pale-purple cursor-pointer">
                    <h4 className="text-lg font-bold text-ellipsis whitespace-nowrap overflow-hidden pr-4">{list.name}</h4>
                    <span className="text-base font-semibold">{`${list.items.length === 0 ? '0' : "0/" + list.items.length }`}</span>
                  </a>
                ))}
              </nav>
            </aside>
            <div className="flex flex-wrap gap-9 items-center sm:items-start w-full">
                {lists.map((list: IList) => (
                    <List list={list} key={list.id} />
                ))}
            </div>
          </section>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <small className="flex items-center gap-2">Copiright: Carop13 develop</small>
        </footer>
    </div>
  )
}

export default App
