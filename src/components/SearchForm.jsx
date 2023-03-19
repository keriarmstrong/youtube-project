
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function SearchForm() {
  const navigate = useNavigate()
  const [userInput, setUserInput] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchresults/${userInput}`)
    setUserInput("");
  };

  const [order, setOrder] = useState('')
  // const {order} = useParams();
  const handleOrderChange =(e) => {
    console.log(e.target.value);
    setOrder(e.target.value);
  }

  function OrderList() {
    // e.preventDefault();
  return(
      <form >
        <select onChange={(e) => {handleOrderChange(e)}}>
          <option value='relevance'>relevance</option>
          <option value='date'>date</option>
          <option value='rating'>rating</option>
          <option value='title'>title</option>
        </select>
      </form>
  ) 
  }

  return (
    <div>
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
            <button type="submit" style={{ backgroundColor: '#fff', borderRadius: '10px' }} className="btn clear" >
              🔍︎
            </button>
          </div>
        </div>
      </form>
      <div className="orderlist">
        <OrderList />
      </div>
    </div>


  );
}

export default SearchForm;