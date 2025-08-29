import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showToast, setShowToast] = useState(false);
  const [premiumMessage, setPremiumMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Toast from signup
  useEffect(() => {
    if (location.state?.fromSignup) {
      setPremiumMessage(location.state.premiumMessage);
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
        navigate(location.pathname, { replace: true });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.email || !formData.password) {
      setErrorMessage('Please fill in both fields.');
      return;
    }

    // Clear previous error
    setErrorMessage('');

    // TODO: Add login logic here (API call, auth, etc.)
    console.log('Logging in with', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-5 border rounded-lg shadow-md bg-white bg-opacity-80">
      <h2 className="text-xl font-bold mb-5 text-center">Login</h2>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in z-50">
          🎉 {premiumMessage}
        </div>
      )}

      {/* Login Form */}
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <label className="flex flex-col text-sm font-medium">
          E-mail
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded text-sm"
            placeholder="Enter email"
          />
        </label>

        <label className="flex flex-col text-sm font-medium">
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border rounded text-sm"
            placeholder="Enter password"
          />
        </label>

        {errorMessage && (
          <p className="text-red-600 text-sm text-center">{errorMessage}</p>
        )}

        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 rounded-full w-full hover:bg-green-600 transition"
        >
          Login
        </button>
      </form>

      <p className="mt-3 text-center text-xs">
        Don't have an account?{' '}
        <span
          className="text-green-600 hover:underline cursor-pointer"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </span>
      </p>

      {/* Toast Animation */}
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in {
            animation: slideIn 0.4s ease-out;
          }
        `}
      </style>
    </div>
  );
}
