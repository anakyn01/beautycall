import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './include/Header';
import Member from './components/Member';
import Edu from './components/Edu';
import Charge from './components/Charge';
import Point from './components/Point';
import Call from './components/Call';
import Join from './components/Join';
import KakaoJoin from './components/KakaoJoin';
import Search from './components/Search';
import IdPw from './components/IdPw';
import NoPage from './components/NoPage';
import './css/style.scss';
import Loading from './components/Loading';
import MyPage from './components/MyPage';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="member" element={<Member />} />
          <Route path="edu" element={<Edu />} />
          <Route path="charge" element={<Charge/>} />
          <Route path="point" element={<Point/>} />
          <Route path="splash" element={<Loading/>} />
          <Route path="call" element={<Call/>} />
          <Route path="join" element={<Join/>} />
          <Route path="kakao" element={<KakaoJoin/>} />
          <Route path="find" element={<Search/>} />
          <Route path="idpw" element={<IdPw/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>    
    </>
  );
}

export default App;
