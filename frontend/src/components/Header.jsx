import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/100 backdrop-blur-md text-gray-900 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
          <img src="/logo.png" alt="Streamory Logo" className="h-12 w-12 object-contain" />
          <h1 className="text-3xl font-playfair tracking-wide">Streamory</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          <Link to="/categories" className="hover:text-green-600 transition">Categories</Link>
          <Link to="/all-memories" className="hover:text-green-600 transition">All Memories</Link>
          <Link to="/my-memories" className="hover:text-green-600 transition">My Memories</Link>
          <Link to="/about" className="hover:text-green-600 transition">About</Link>
        </nav>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <Link 
            to="/login" 
            className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-gradient text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition duration-300"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-gradient text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg shadow-md bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:shadow-lg transition duration-300 group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`bg-white block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium animate-slideDown">
          <Link to="/" className="block hover:text-green-600 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/categories" className="block hover:text-green-600 transition" onClick={() => setIsOpen(false)}>Categories</Link>
          <Link to="/all-memories" className="block hover:text-green-600 transition" onClick={() => setIsOpen(false)}>All Memories</Link>
          <Link to="/my-memories" className="block hover:text-green-600 transition" onClick={() => setIsOpen(false)}>My Memories</Link>
          <Link to="/about" className="block hover:text-green-600 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/login" className="block bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-gradient text-white px-5 py-2 rounded-full text-center" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link to="/signup" className="block bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-gradient text-white px-5 py-2 rounded-full text-center" onClick={() => setIsOpen(false)}>
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}
