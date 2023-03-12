import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import SingleVid from "./pages/SingleVid";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/video/:id" element={<SingleVid />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
