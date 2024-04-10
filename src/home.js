// import { useEffect, useState } from "react";
import useFetch from "./fetchFile";
import BlogList from "./blogList";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  // const [name ,setName] = useState('luigi')
  // a condition is passed that if thething on the left is true the thing on the right is rendered

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blog={data} />}
    </div>
  );
};

export default Home;
