import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </Routes>

  )
}

export default App