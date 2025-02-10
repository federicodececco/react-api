import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import PostList from './pages/PostList'
import Staff from './pages/Staff'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/post-list/:id' element={<Staff />}></Route>
          <Route path='/post-list' element={<PostList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
