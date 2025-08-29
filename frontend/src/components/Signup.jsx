import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.username || !formData.email || !formData.password) {
      setMessage('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setMessage('Please enter a valid email.');
      return;
    }

    if (formData.password.length < 6) {
      setMessage('Password must be at least 6 characters.');
      return;
    }

    // ✅ Navigate to login with state for toast
    navigate('/login', {
      state: {
        fromSignup: true,
        premiumMessage:
          '✅ You have successfully signed up! Login now to enjoy your memories.',
      },
    });

    // Optional: Reset form after submit
    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-5 border rounded-lg shadow-md bg-white bg-opacity-80">
      <h2 className="text-xl font-bold mb-5 text-center">Sign Up</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label className="flex flex-col text-sm font-medium">
          Username
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-2 border rounded text-sm"
            placeholder="Enter username"
          />
        </label>

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

        {/* ✅ Error message above the button */}
        {message && (
          <p className="text-center text-red-600 font-medium text-sm">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 rounded-full w-full hover:bg-green-600 transition"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-3 text-center text-xs">
        Already have an account?{' '}
        <span
          className="text-green-600 hover:underline cursor-pointer"
          onClick={() => navigate('/login')}
        >
          Login
        </span>
      </p>
    </div>
  );
}
