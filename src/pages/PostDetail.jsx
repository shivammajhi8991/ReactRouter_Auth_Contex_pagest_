import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const url = "https://jsonplaceholder.typicode.com/posts";
const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  async function fetchpost() {
    const data = await fetch(`${url}/${id}`);
    const res = await data.json();
    setPost(res);
  }

  useEffect(() => {
    fetchpost();
  }, []);
  return (
    <div>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default PostDetail;
