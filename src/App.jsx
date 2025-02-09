import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import PostList from './pages/PostList'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/post-list' element={<PostList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
