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
import MovieInfo from "./pages/Movie/MovieInfo";
import MypageMain from "./pages/MyPage/MypageMain";
import MovieInfoComments from "./pages/Movie/MovieInfoComments";
import DailyBoxoffice from "./pages/Boxoffice/DailyBoxoffice";
import MonthlyBoxoffice from "./pages/Boxoffice/MonthlyBoxoffice";
import MovieGenre from "./pages/Movie/MovieGenre";

function App() {
  return (
    <div className="App">
      <Headers className="headers"></Headers>

      <Routes>
        <Route path="/home" element={<Main />} />

        {/* <Route path="/movie" element={<MovieInfo />} /> */}
        {/* <Route path="/movie/:genre" element={<MovieInfo />} /> */}
        <Route path="/:genre" element={<MovieGenre />} />
        <Route path="/home/movie/detail/:code" element={<MovieInfo />} />
        <Route
          path="/movie/:movieCode/comments"
          element={<MovieInfoComments />}
        />

        <Route path="/boxoffice" element={<DailyBoxoffice />} />
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
