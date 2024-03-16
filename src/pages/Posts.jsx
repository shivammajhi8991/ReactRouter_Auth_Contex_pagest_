import { useEffect, useState } from "react";
import Post from "../component/Post";
const endPoint = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [post, setPost] = useState(null);
  async function fetchingData() {
    const data = await fetch(endPoint);
    const res = await data.json();
    setPost(res);
  }
  useEffect(() => {
    fetchingData();
  }, []);

  fetchingData();
  return (
    <>
      {post &&
        post.map((post) => (
          <Post id={post.id} title={post.title} key={post.id} />
        ))}
    </>
  );
};

export default Posts;
