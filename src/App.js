import Home from "./components/pages/Home";
import UserBlog from "./components/pages/UserBlog";
import User from "./components/pages/User";
import CreatePost from "./components/pages/CreatePost";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import "./styles/normalize.css"
import "./styles/fontawesome.min.css"
import "./styles/main.css"


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users" element={<User/>} />
      <Route path="/users/:userId" element={<UserBlog/>} />
      <Route path="/users/:userId/posts/new" element={<CreatePost/>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

