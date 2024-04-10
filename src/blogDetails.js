import { useParams } from "react-router-dom";
import useFetch from "./fetchFile";
import {useHistory} from 'react-router-dom'
import { useState } from "react";

const BlogDetails = () => {
  const   {id} = useParams()
  const { data:blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id);
  const [_isPending, setIsPending] =useState(false)
 const History = useHistory()
  const handleDlete = ()=>{
   setIsPending(true);
   fetch("http://localhost:8000/blogs/" + blog.id, {
      method: 'DELETE'
   }).then(()=>{
      setIsPending(false)
      History.push('/')
   })
  }
    return ( 

        <div className="blog-details">
           {isPending && <div> Loading...</div>}
           {error && <div> {error}</div>}
           {blog && (
            <article>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
             <div>{blog.body}</div>
             {!_isPending &&<button onClick={handleDlete}>delete</button>}
             { _isPending &&<button onClick={handleDlete} disabled>deleting blog</button>}
            </article>
           
           )}
        </div>
     );
}
 
export default BlogDetails;