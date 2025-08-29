import React from "react";
import { FaHeadphones, FaCloudUploadAlt, FaMobileAlt, FaShieldAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Streamory ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <FaHeadphones className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Easy Viewing</h3>
              <p className="text-gray-600">
                Watch your favorite memories with a single click.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <FaCloudUploadAlt className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">One-Click Upload</h3>
              <p className="text-gray-600">
                Easily share your moments with the world.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <FaMobileAlt className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Mobile Friendly</h3>
              <p className="text-gray-600">
                Fully responsive design for all devices.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <FaShieldAlt className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Secure User Authentication</h3>
              <p className="text-gray-600">
                Login and signup with protected routes for a secure experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-10">What People Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <p className="italic text-gray-700 mb-4">
                “Streamory made sharing my memories so easy. Super clean interface!”
              </p>
              <p className="font-bold">Mihir Jain{" "}
                <a href="#" className="inline-block align-middle ml-1 text-blue-600"><a
              href="https://www.linkedin.com/in/mihir-jain-40144265"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-2xl hover:text-blue-900"
            >
              <FaLinkedin />
            </a></a>
              </p>
              <p className="text-gray-500">Developer</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <p className="italic text-gray-700 mb-4">
                “All my memories, all in one place—at last!”
              </p>
              <p className="font-bold">Vikas Kumar Kaushal{" "}
                <a href="#" className="inline-block align-middle ml-1 text-blue-600"><a
              href="https://www.linkedin.com/in/vikas-kumar-kaushal-80b5bb28a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-2xl hover:text-blue-900"
            >
              <FaLinkedin />
            </a></a>
              </p>
              <p className="text-gray-500">Student</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <p className="italic text-gray-700 mb-4">
                “I discovered so many valuable memories for my family!”
              </p>
              <p className="font-bold">Deepak Tyagi{" "}
                <a href="#" className="inline-block align-middle ml-1 text-blue-600"> <a
              href="https://www.linkedin.com/in/deepaktyagi2108"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-2xl hover:text-blue-900"
            >
              <FaLinkedin />
            </a></a>
              </p>
              <p className="text-gray-500">Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-8 border-t text-center">
        <div>
          <p className="text-2xl mb-2">💻 Developed by</p>
          <h2 className="text-green-700 font-bold text-xl">Sparsh Khandelwal</h2>
          <p className="text-gray-600 mt-1">Aspiring Software Developer | MERN Stack</p>

          <div className="flex justify-center items-center gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/sparsh-kh23/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-3xl hover:text-blue-900"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sparshkhandelwal2300@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 text-3xl hover:text-red-800"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
