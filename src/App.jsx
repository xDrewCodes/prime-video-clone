import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Nav from "./components/Nav"
import Home from './pages/Home'
import Movies from './pages/Movies'
import { useEffect, useState } from 'react'

function App() {

  const [homeMovies, setHomeMovies] = useState([])

  async function searchMovies() {
    const queries = ['a', 'b', 'd', 'c', 'e', 'f', 'g', 'h']
    const requests = []

    queries.forEach(query => {
      const options = {
        method: 'GET',
        url: 'https://imdb.iamidiotareyoutoo.com/search',
        params: { q: query }
      }
      requests.push(axios.request(options))
    })

    try {
      const responses = await Promise.all(requests)
      const movies = responses.flatMap(response => response.data.description)
      setHomeMovies(movies)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    searchMovies()
  }, [])

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home homeMovies={homeMovies} />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path=":page" element={<></>}></Route>
      </Routes>
    </Router>
  )
}

export default App
