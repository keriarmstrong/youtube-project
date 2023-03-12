import './App.css';
import { Routes, Route } from 'react-router-dom';
// import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import SearchBar from './Components/SearchBar';

function App() {
  console.log(process.env.React_APP_API_Key)
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
        <Route path='/home' element={ <Home/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/search' element={ <SearchBar/> } />








      </Routes>
      <h3>WORD</h3>

    <h1></h1>
    </div>
  );
}

export default App;
