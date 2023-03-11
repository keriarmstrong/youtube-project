import './App.css';

// import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import SearchBar from './Components/SearchBar';

function App() {
  console.log(process.env.React_APP_API_Key)
  return (
    <div className="App">
      {/* <NavBar/> */}
  

    <h1>Youtube Clone</h1>
    <p>videos</p>

    </div>
  );
}

export default App;
