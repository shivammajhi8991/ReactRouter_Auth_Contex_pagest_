import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, About, Contact, Error, Posts, PostDetail, Login } from "./pages";
import Layout from "./layouts/Layout";
import RequireAuth from "./component/RequireAuth";
import AuthContextProvider from "./context/AuthContextProvider";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="posts"
        element={
          <RequireAuth>
            <Posts />
          </RequireAuth>
        }
      />
      <Route path="posts/:id" element={<PostDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};

export default App;
