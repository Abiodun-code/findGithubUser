import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserInfo from './pages/UserInfo'

function App() {

  return (
    <div className='w-full h-auto'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:name" element={<UserInfo/>}/>
      </Routes>
    </div>
  )
}

export default App
