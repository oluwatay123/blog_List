import { useState } from "react";
import {useHistory} from 'react-router-dom'
const CreateBLog = () => {
  const [author, setAuthor] = useState("Mario");
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [isPending , setIsPending] = useState(false)
  const History = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true)
    const Blog = { title, body, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Blog),
    }).then (()=>{
  setIsPending(false)
History.push('/')
    });
  };
  return (
    <div className="create">
      <h2>create your new blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />

        <label> Blog body</label>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          required
        ></textarea>
        <label>Blog author</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          required
        >
          <option value={"Mario"}>Mario</option>
          <option value={"Mario"}>Jonh</option>
        </select>
       {!isPending && <button>Add Blog</button>}
         {isPending && <button>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default CreateBLog;
