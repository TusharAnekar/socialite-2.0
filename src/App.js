import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { Home } from "./pages/Home/Home";
import { PageWrapper } from "./components/PageWrapper/PageWrapper";
import { Explore } from "./pages/Explore/Explore";
import { Bookmarks } from "./pages/Bookmarks/Bookmarks";
import { RequiresAuth } from "./components/RequiresAuth";
import { Profile } from "./pages/Profile/Profile";
import { PostModal } from "./components/PostModal/PostModal";
import { useContext } from "react";
import { PostsContext } from "./contexts/posts-context";

function App() {
  const {postsState: {isShowPostModal}} = useContext(PostsContext)
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <PageWrapper>
                <Home />
              </PageWrapper>
            </RequiresAuth>
          }
        ></Route>
        <Route
          path="/explore"
          element={
            <RequiresAuth>
              <PageWrapper>
                <Explore />
              </PageWrapper>
            </RequiresAuth>
          }
        ></Route>
        <Route
          path="/bookmark"
          element={
            <RequiresAuth>
              <PageWrapper>
                <Bookmarks />
              </PageWrapper>
            </RequiresAuth>
          }
        ></Route>
        <Route
          path="/profile/:profileId"
          element={
            <RequiresAuth>
              <PageWrapper>
                <Profile />
              </PageWrapper>
            </RequiresAuth>
          }
        ></Route>
      </Routes>
      {isShowPostModal && <PostModal />}
    </div>
  );
}

export default App;
