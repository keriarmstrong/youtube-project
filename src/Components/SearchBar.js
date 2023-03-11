import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <form>
            <input type='text' value='' placeholder='Enter your search...'/>
            <button type='submit'> search </button>
        </form>
    </div>
  )
}

export default SearchBar