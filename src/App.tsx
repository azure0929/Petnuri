import { Route, Routes } from 'react-router-dom';
import Login from '@/pages/Login'
import Home from './pages/home';
import Challenge from './pages/challenge';
import PointShop from '@/pages/challenge/PointShop';
import PetTalk from '@/pages/petTalk';
import Concern from '@/pages/petTalk/concern';
import FreeTalk from '@/pages/petTalk/freetalk';
import MyPage from './pages/mypage/MyPage';
import EditInfo from './pages/mypage/EditInfo';

import Admin from '@/pages/admin'
import Daily from '@/pages/admin/Daily'
import Yanado from '@/pages/admin/Yanado'
import Nayegi from '@/pages/admin/Nayegi';
import Cheonha from '@/pages/admin/Cheonha';

import './styles/common.scss';
import './styles/globalstyle.scss';


const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/challenge"
        element={<Challenge />}
      />
      <Route
        path="/pointshop"
        element={<PointShop />}
      />
      <Route
        path="/pettalk"
        element={<PetTalk />}
      />
      <Route
        path="/pettalk"
        element={<PetTalk />}
      />
      <Route
        path="/concern"
        element={<Concern />}
      />
      <Route
        path="/freetalk"
        element={<FreeTalk />}
      />
      <Route
        path="/mypage"
        element={<MyPage />}
      />
      <Route
        path="/mypage/editinfo"
        element={<EditInfo />}
      />

      <Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="daily" element={<Daily />} />
        <Route path="yanado" element={<Yanado />} />
        <Route path="nayegi" element={<Nayegi />} />
        <Route path="cheonha" element={<Cheonha />} />
      </Route>
        

    </Routes>
  );
};

export default App;
