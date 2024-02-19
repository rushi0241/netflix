import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import List from "./components/List";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            element={
              <>
                <Header /> <HomeBanner />
              </>
            }
            path="/"
          />
          <Route element={<Login />} path="/Login" />
          {/* <Route
            element={
              <>
                <Header />
                <HomeBanner />
                <List />
              </>
            }
            path="/Login"
          /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
