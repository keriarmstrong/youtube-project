import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section>
      <div className="error-container">
        <h1>oops! page not found</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  )
}
export default Error;