import { Outlet, Route, Routes } from "react-router-dom";
import Headers from "./components/Headers";
import Footers from "./components/Footers";
import Main from "./pages/MyPage/Main";
import MypageLayout from "./components/MypageLayout";
import MyTickets from "./pages/MyPage/MyTickets";
import MvWntSee from "./pages/MyPage/MvWntSee";
import MvISaw from "./pages/MyPage/MvISaw";
import MyComments from "./pages/MyPage/MyComments";

function App() {
  return (
    <div className="App">
      <Headers className="headers"></Headers>

      <Routes>
        <Route path="/mypage" element={<Main />} />
        <Route path="/mypage/*" element={<MypageLayout />}>
          <Route path="mytickets" element={<MyTickets />} />
          <Route path="mvwntsee" element={<MvWntSee />} />
          <Route path="mvisaw" element={<MvISaw />} />
          <Route path="mycomments" element={<MyComments />} />
        </Route>
        {/* <Route path="/mypage/mvwntsee" element={<MvWntSee />} /> */}
      </Routes>
      <Outlet />
      <Footers className="footer"></Footers>
    </div>
  );
}

export default App;
