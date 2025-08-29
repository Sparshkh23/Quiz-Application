import VideoUpload from './VideoUpload';
import { useState } from 'react';

export default function MyMemories() {
  const [showForm, setShowForm] = useState(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  const isLoggedIn = false; // Hardcoded to logged out for now

  const handleUploadClick = () => {
    if (isLoggedIn) {
      setShowForm(true);
      setShowLoginMessage(false);
    } else {
      setShowLoginMessage(true);
    }
  };

  return (
    <div className="pt-24 px-6 flex flex-col items-center text-center">
      {!showForm ? (
        <>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No Memories"
            className="w-48 h-48 mb-6 opacity-80"
          />
          <h1 className="text-3xl font-bold mb-2">No Memories Found</h1>
          <p className="text-gray-600 max-w-md mb-6">
            You haven’t saved any memories yet. Upload a video to start keeping your precious moments safe in one place.
          </p>

          <button
            onClick={handleUploadClick}
            className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition duration-300"
          >
            Upload a Memory
          </button>

          {showLoginMessage && (
            <p className="mt-4 text-red-600 font-semibold">
              Please login or signup to upload memories.
            </p>
          )}
        </>
      ) : (
        <div className="w-full max-w-2xl">
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setShowForm(false)}
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
            >
              Cancel Uploading
            </button>
          </div>

          <VideoUpload />
        </div>
      )}
    </div>
  );
}
