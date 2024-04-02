import { Outlet, Route, Routes } from "react-router-dom";
import Headers from "./components/Headers";
import Footers from "./components/Footers";
import Main from "./pages/MyPage/Main";
import MyReviews from "./pages/MyPage/MyReviews";
import MyTickets from "./pages/MyPage/MyTickets";
import NavigationBar from "./components/NavigationBar";
import Navi from "./components/Navi";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Headers className="header"></Headers>
      {/* <Navi className="navigationBar"></Navi> */}
      <Navigation className="navigation"></Navigation>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route path="myPage" element={<Main />} />
          <Route path="myPage/myReview" element={<MyReviews />} />
          <Route path="myPage/myTickets" element={<MyTickets />} />
        </Route>
      </Routes>
      <Outlet />
      <Footers className="footer"></Footers>
    </div>
  );
}

export default App;
