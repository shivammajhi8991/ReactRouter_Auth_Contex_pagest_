import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, About, Contact, Error, Posts, PostDetail, Login } from "./pages";
import Layout from "./layouts/Layout";
import RequireAuth from "./component/RequireAuth";
import { useAuth } from "./context/AuthContextProvider";
import { loader as fetchPosts } from "./pages/Posts";
import { loader as fectPostDetail } from "./pages/PostDetail";

const App = () => {
  const { isLoggedIn } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="posts"
          loader={(args) => {
            return fetchPosts(args, { isLoggedIn: isLoggedIn });
          }}
          errorElement={<Error />}
          element={<Posts />}
        />
        <Route
          path="posts/:id"
          element={<PostDetail />}
          errorElement={<Error />}
          loader={(args) => {
            return fectPostDetail(args, { isLoggedIn: isLoggedIn });
          }}
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
