
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Form from './Components/Form/Form'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Form/>} />
      <Route path='/:id' element={<Form/>} />
      <Route path='/dashboard' element={<Dashboard/>} />

    </Routes>
  )
}

export default App
