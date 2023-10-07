import { useState } from 'react'
import './App.css'
import Header from './Componentes/header/Header'
import Home from './Componentes/home/Home'
import Projects from './Componentes/projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Projects/>
    </>
  )
}

export default App
