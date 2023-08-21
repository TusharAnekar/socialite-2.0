import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { Home } from "./pages/Home/Home";
import { PageWrapper } from "./components/PageWrapper/PageWrapper";
import { Explore } from "./pages/Explore/Explore";
import { Bookmarks } from "./pages/Bookmarks/Bookmarks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        ></Route>
        <Route
          path="/explore"
          element={
            <PageWrapper>
              <Explore />
            </PageWrapper>
          }
        ></Route>
        <Route
          path="/bookmark"
          element={
            <PageWrapper>
              <Bookmarks />
            </PageWrapper>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
