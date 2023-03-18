import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import SingleVid from "./pages/SingleVid";
import SearchResults from './pages/SearchResults';
import Error from "./pages/Error";
import Modal from './components/Modal';
import { useState } from 'react';


function App() {
  const [error, setError] = useState(false)

  return (
    <>
      {error && <Modal  error={error} setError={setError}/> }
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home error={error} setError={setError} />} />
        <Route path="/about" element={<About />} />
         <Route path="/searchresults/:search" element={<SearchResults />} />
        <Route path="/video/:id" element={<SingleVid />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
