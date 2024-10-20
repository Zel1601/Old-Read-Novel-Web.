// App.js

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Component/Header';
import BannerCarousel from './Component/BannerCarousel';
import Main from './Page/Main';
import AllNovel from './Page/AllNovel';
import NovelCategory from './Page/NovelCategory';
import { NovelDataProvider } from './Context/NovelDataContext';
import Footer from './Component/Footer';
import NovelDetail from './Page/NovelDetail';
import ChapterDetail from './Page/ChapterDetail';
import Login from './Page/Login';
import Register from './Page/Register';
import ProfilePage from './Page/ProfilePage';
import EditProfileForm from './Page/EditProfileForm';
import Coin from './Page/Coin';
import AdminLogin from './Admin/AdminLogin'; 
import AdminDashBoard from './Admin/AdminDashBoard';
import NovelList from './Admin/NovelList';
import AddCategory from './Admin/AddCategory';
import EditCategory from './Admin/EditCategory';
import DeleteCategory from './Admin/DeleteCategory';
import AddNovel from './Admin/AddNovel';
import EditNovel from './Admin/EditNovel';
import DeleteNovel from './Admin/DeleteNovel';
import AddChapter from './Admin/AddChapter';
import EditChapter from './Admin/EditChapter';
import DeleteChapter from './Admin/DeleteChapter';

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  return (
    <BrowserRouter>
      <NovelDataProvider>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/main" /> : <Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<MainWithHeaderAndFooter user={user} />} />
          <Route path="/AllNovel" element={<AllNovelWithHeaderAndFooter />} />
          <Route path="/category/:id" element={<NovelCategoryWithHeaderAndFooter />} />
          <Route path="/novel/:id" element={<NovelDetailWithHeaderAndFooter user={user} setUser={setUser} />} />
          <Route path="/novel/:id/chapter/:chapterId" element={<ChapterDetailWithHeaderAndFooter />} />
          <Route path="/profile" element={user ? <ProfilePageWithHeaderAndFooter user={user} /> : <Navigate to="/" />} />
          <Route path="/edit" element={user ? <EditProfileFormWithHeaderAndFooter user={user} /> : <Navigate to="/" />} />
          <Route path="/coin" element={<CoinWithHeaderAndFooter user={user} setUser={setUser} />} />
          <Route path="/adminlogin" element={<AdminLogin setAdmin={setAdmin}/>} />
          <Route path="/admindashboard" element={<AdminDashBoard />} />
          <Route path="/list" element={<NovelList />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/editcategory" element={<EditCategory />} />
          <Route path="/deletecategory" element={<DeleteCategory />} />
          <Route path="/addnovel" element={<AddNovel />} />
          <Route path="/editnovel" element={<EditNovel />} />
          <Route path="/deletenovel" element={<DeleteNovel />} />
          <Route path="/addchapter" element={<AddChapter />} />
          <Route path="/editchapter" element={<EditChapter />} />
          <Route path="/deletechapter" element={<DeleteChapter />} />
        </Routes>
      </NovelDataProvider>
    </BrowserRouter>
  );
}

const MainWithHeaderAndFooter = ({ user }) => (
  <>
    <Header user={user} />
    <BannerCarousel />
    <Main />
    <Footer />
  </>
);

const AllNovelWithHeaderAndFooter = () => (
  <>
    <Header />
    <BannerCarousel />
    <AllNovel />
    <Footer />
  </>
);

const NovelCategoryWithHeaderAndFooter = () => (
  <>
    <Header />
    <BannerCarousel />
    <NovelCategory />
    <Footer />
  </>
);

const NovelDetailWithHeaderAndFooter = ({ user, setUser }) => (
  <>
    <Header user={user} setUser={setUser} />
    <BannerCarousel />
    <NovelDetail user={user} setUser={setUser} />
    <Footer />
  </>
);

const ChapterDetailWithHeaderAndFooter = () => (
  <>
    <Header />
    <BannerCarousel />
    <ChapterDetail />
    <Footer />
  </>
);

const ProfilePageWithHeaderAndFooter = ({ user }) => (
  <>
    <Header user={user} />
    <BannerCarousel />
    <ProfilePage user={user} />
    <Footer />
  </>
);

const EditProfileFormWithHeaderAndFooter = ({ user }) => (
  <>
    <Header user={user} />
    <BannerCarousel />
    <EditProfileForm user={user} />
    <Footer />
  </>
);

const CoinWithHeaderAndFooter = ({ user, setUser }) => (
  <>
    <Header user={user} setUser={setUser} />
    <BannerCarousel />
    <Coin user={user} setUser={setUser} />
    <Footer />
  </>
);

export default App;
