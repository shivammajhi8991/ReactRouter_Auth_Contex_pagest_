import React from "react";
import { useState, useEffect } from "react";
import { redirect, useLoaderData, useParams } from "react-router-dom";

export async function loader({ params }, { isLoggedIn }) {
  if (!isLoggedIn) {
    return redirect("/login");
  }
  const url = "https://jsonplaceholder.typicode.com/posts";
  const data = await fetch(`${url}/${params.id}`);
  const res = await data.json();
  return res;
}
const PostDetail = () => {
  const post = useLoaderData();
  // const { id } = useParams();
  // const [post, setPost] = useState(null);
  // async function fetchpost() {
  //   const data = await fetch(`${url}/${id}`);
  //   const res = await data.json();
  //   setPost(res);
  // }

  // useEffect(() => {
  //   fetchpost();
  // }, []);
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
