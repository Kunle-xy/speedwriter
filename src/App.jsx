import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Ai from './components/Ai/Ai'
import Write from './Write'




function App() {

  return (
    <main>
      <Routes>
          {/* public */}
          <Route path="/" element={<Layout />}>
              <Route path="" element={<About />} />
          </Route>
          <Route path='write' element={<Write />}>
              <Route path="" element={<Ai />} />
          </Route>
      </Routes>
  </main>
  )
}

export default App
