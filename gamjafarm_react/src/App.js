import { Outlet, Route, Routes } from "react-router-dom";
import Headers from "./components/Headers";
import Footers from "./components/Footers";
import Main from "./pages/Main/Main";
import MypageLayout from "./components/MypageLayout";
import MyTickets from "./pages/MyPage/MyTickets";
import MvWntSee from "./pages/MyPage/MvWntSee";
import MvISaw from "./pages/MyPage/MvISaw";
import MyComments from "./pages/MyPage/MyComments";
import CommentsMain from "./pages/Comments/CommentsMain";
import CommentDetails from "./pages/Comments/CommentDetails";
import MovieInfo from "./pages/MovieInfo/MovieInfo";
import MypageMain from "./pages/MyPage/MypageMain";
import MovieInfoComments from "./pages/MovieInfo/MovieInfoComments";
import DailyBoxoffice from "./pages/Boxoffice/DailyBoxoffice";
import MonthlyBoxoffice from "./pages/Boxoffice/MonthlyBoxoffice";

function App() {
  return (
    <div className="App">
      <Headers className="headers"></Headers>

      <Routes>
        <Route path="" element={<Main />} />

        {/* <Route path="/movie" element={<MovieInfo />} /> */}
        {/* <Route path="/movie/:genre" element={<MovieInfo />} /> */}
        <Route path="/movie/:movieName" element={<MovieInfo />} />
        <Route
          path="/movie/:movieName/comments"
          element={<MovieInfoComments />}
        />

        <Route path="/boxoffice/daily" element={<DailyBoxoffice />} />
        <Route path="/boxoffice/monthly" element={<MonthlyBoxoffice />} />

        <Route path="/playground/comments" element={<CommentsMain />} />
        <Route
          path="/playground/comments/:currentPage"
          element={<CommentDetails />}
        />

        <Route path="/mypage" element={<MypageMain />} />
        {/* <Route path="/mypage/*" element={<MypageLayout />}>
          <Route path="mytickets" element={<MyTickets />} />
          <Route path="mvwntsee" element={<MvWntSee />} />
          <Route path="mvisaw" element={<MvISaw />} />
          <Route path="mycomments" element={<MyComments />} />
        </Route> */}
        {/* <Route path="/mypage/mvwntsee" element={<MvWntSee />} /> */}
      </Routes>
      <Outlet />
      <Footers className="footer"></Footers>
    </div>
  );
}

export default App;
