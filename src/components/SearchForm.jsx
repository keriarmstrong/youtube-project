const SearchForm = () => {

  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite video</label>
          <input
            type='text'
            placeholder="Enter here..."
            name='name'
          />
          <button type='submit' className='btn' style={{ marginTop: '10px' }}>Search</button>
        </div>
      </form>
    </section>
  )
}
export default SearchForm