import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Ideas, Overview, Tickets } from './pages'

function App() {

  return (
    <div className='flex justify-between'>
      <Navbar/>
      <div className='w-[80%] py-[36px] px-[30px] bg-[#F7F8FC]'>
        <Header/>
        <Routes>
          <Route path='/' element={<Overview/>}/>
          <Route path='/tickets' element={<Tickets/>}/>
          <Route path='/ideas' element={<Ideas/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
