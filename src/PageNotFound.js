import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PageNotFound = () => {
    return (  
        <div className="not-found">
            <h1>Sorry</h1>
            <p>this page is not found </p>
            <Link to="/">
      click the link to go home 
            </Link>
        </div>
    );
}
 
export default PageNotFound;