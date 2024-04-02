import { Route, Router, Routes } from "react-router-dom";
import Headers from "./components/Headers";
import Footers from "./components/Footers";
import Main from "./pages/MyPage/Main";
import MyReviews from "./pages/MyPage/MyReviews";
import MyTickets from "./pages/MyPage/MyTickets";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Headers className="header"></Headers>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route path="myPage" element={<Main />}>
              <Route path="myPage/myReview" element={<MyReviews />} />
              <Route path="myPage/myTickets" element={<MyTickets />} />
            </Route>
          </Route>
        </Routes>
        <Footers className="footer"></Footers>
      </Router>
    </div>
  );
}

export default App;
