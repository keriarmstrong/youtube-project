
const SearchForm = ({searchQuery, setSearchQuery, handleSubmit}) => {


  return (
    <section className='section search'>
      <form onSubmit={handleSubmit} className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite video</label>
          <input
            type='search'
            placeholder="Enter here..."
            name='name'
            value={searchQuery}
            onChange={event =>setSearchQuery(event.target.value)}
          />
          <button type='submit'  className='btn' style={{ marginTop: '10px' }}>Search</button>
        </div>
      </form>
    </section>
  )
}
export default SearchForm