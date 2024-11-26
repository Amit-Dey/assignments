import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Signin from './Routes/Signin'
import Signup from './Routes/Signup'
import Home from './Routes/Home'
import CreateCard from './components/CreateCard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route index element={<Home />}/>
            <Route path='createcard' element={<CreateCard />}/>
            <Route path='signin' element={<Signin />}/>
            <Route path='signup' element={<Signup />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
