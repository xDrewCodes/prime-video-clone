import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
