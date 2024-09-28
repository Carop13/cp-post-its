import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ListProvider } from "./contexts/ListContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ListProvider>
      <App />
    </ListProvider>
  </StrictMode>,
)
