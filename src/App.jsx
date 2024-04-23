import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import ChuckNorrisEdit from './Pages/ChuckNorrisEdit'



function App() {

  return (
    <>
    <Routes>
    <Route path='/' element = {<Login/>}/>
    <Route path='/edit' element = {<ChuckNorrisEdit/>}/>

    </Routes>
    </>
  )
}

export default App
