import { useEffect, useState } from "react";
import Post from "../component/Post";

import { redirect, useLoaderData } from "react-router-dom";
// loader
// 1. provide loaders function to route
// 2. useLoaderData and get Data

export async function loader(args, { isLoggedIn }) {
  const endPoint = "https://jsonplaceholder.typicode.com/posts";
  // if user is not logged in then redirect to login
  if (!isLoggedIn) {
    return redirect("/login");
  }
  const data = await fetch(endPoint);
  if (!data.ok) {
    throw new Error("Something went wrong!");
  }
  const res = await data.json();

  return res;
}
const Posts = () => {
  const posts = useLoaderData();

  // const [post, setPost] = useState(null);
  // async function fetchingData() {
  //   const data = await fetch(endPoint);
  //   const res = await data.json();
  //   setPost(res);
  // }
  // useEffect(() => {
  //   fetchingData();
  // }, []);

  return (
    <>
      <h1>Posts</h1>
      {posts &&
        posts.map((post) => (
          <Post id={post.id} title={post.title} key={post.id} />
        ))}
    </>
  );
};

export default Posts;
