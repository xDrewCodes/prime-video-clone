import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Nav from "./components/Nav";
import Home from './pages/Home';
import Movies from './pages/Movies';
import { useEffect } from 'react';


function App() {

  async function searchMovies() {
    
    const options = { method: 'GET', url: 'https://imdb.iamidiotareyoutoo.com/search' };

    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    searchMovies()
  }, [])

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path=":page" element={<></>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
