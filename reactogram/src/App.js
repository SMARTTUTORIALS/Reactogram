import './App.css';
import LoginPage from './pages/Loginpage';
import Signup from './pages/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PostOverview from './pages/PostOverview';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/posts" element={<PostOverview />} />
          <Route exact path="/myprofile" element={<ProfilePage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
