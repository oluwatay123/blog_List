import { Link } from "react-router-dom/cjs/react-router-dom.min";

const blogList = ({blog,title}) => {
    
  

    
    return ( 
// reusable component
        <div className="blog-list">
            <h2>{title}</h2>
            {blog.map((bg)=>(
    <div className="blog-preview"  key={bg.id}>
        <Link to = {`/blog/${bg.id}`}>
        <h2>{bg.title}</h2>
<p> written by{bg.Author}</p>
        </Link>
        
        
    </div>
))}

        </div>
     );
}
 
export default blogList;