import { useState } from "react";
import VideoUpload from "./VideoUpload";

export default function AllMemories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [vlogs, setVlogs] = useState([]); // Replace with actual vlogs data
  const [showUploadForm, setShowUploadForm] = useState(false);

  const isLoggedIn = false; // TODO: Replace with real auth state

  const filteredVlogs = vlogs.filter((vlog) =>
    vlog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center px-6">
      {/* ✅ Search Bar - Only if logged in */}
      {isLoggedIn && (
        <div className="w-full flex justify-center sticky top-0 bg-green-50 z-50 py-4 shadow-md">
          <input
            type="text"
            placeholder="Search for vlogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-center"
          />
        </div>
      )}

      {/* Spacer (only if search bar is shown) */}
      {isLoggedIn && <div className="h-6"></div>}

      {/* Vlogs Section */}
      {vlogs.length > 0 ? (
        filteredVlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {filteredVlogs.map((vlog, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={vlog.thumbnail}
                  alt={vlog.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg font-semibold">{vlog.title}</h2>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              No results found
            </h2>
            <p className="text-gray-600 mb-4">Try a different search term.</p>
          </div>
        )
      ) : (
        <div className="mt-16 flex flex-col items-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No Memories"
            className="w-40 h-40 mb-4 opacity-80"
          />

          {isLoggedIn ? (
            <>
              {!showUploadForm ? (
                <>
                  <h2 className="text-3xl font-bold mb-2">Oops!</h2>
                  <p className="text-gray-600 max-w-md mb-6">
                    No vlog found. Be the first one to upload your memory!
                  </p>
                  <button
                    onClick={() => setShowUploadForm(true)}
                    className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition duration-300"
                  >
                    Upload a Memory
                  </button>
                </>
              ) : (
                <div className="w-full max-w-2xl">
                  <div className="flex justify-center mb-4">
                    <button
                      onClick={() => setShowUploadForm(false)}
                      className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
                    >
                      Cancel Uploading
                    </button>
                  </div>
                  <VideoUpload />
                </div>
              )}
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-2">No Vlogs Found</h2>
              <p className="text-gray-600 max-w-md mb-6">
                Please login or signup to access uploaded Vlogs.
              </p>
              {/* 🔴 No login/signup buttons here, only message */}
            </>
          )}
        </div>
      )}
    </div>
  );
}
