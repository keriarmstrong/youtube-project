
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate()
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchresults/${userInput}`)
    setUserInput(""); 
  };

  return (
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="input-container">
            <input
              type="text"
              placeholder="search your favorite video..."
              name="searchInput"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
              <button type="submit" style={{backgroundColor: '#fff', borderRadius: '10px'}} className="btn clear" >
                🔍︎
              </button>
          </div>  
        </div>
      </form>  
  );
}

export default SearchForm;