import './App.css';
import Header from './components/Header';
import MyMemories from './components/MyMemories';
import SignupPage from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Categories from './components/Categories';
import AllMemories from './components/AllMemories'; // <-- Import the new page
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header stays on all pages */}
      <Header />

      <main className="pt-24">
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Categories Page */}
          <Route path="/categories" element={<Categories />} />

          {/* All Memories Page */}
          <Route path="/all-memories" element={<AllMemories />} />

          {/* Other Pages */}
          <Route path="/my-memories" element={<MyMemories />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
