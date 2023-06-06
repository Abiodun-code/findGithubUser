import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThemeProvider from './hooks/useTheme.tsx'
import { BrowserRouter } from 'react-router-dom'
import UsersProvider from './hooks/useUsers.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UsersProvider>
    <ThemeProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ThemeProvider>
  </UsersProvider>
  ,
)
