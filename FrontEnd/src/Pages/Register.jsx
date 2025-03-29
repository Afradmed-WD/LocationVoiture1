import React from "react";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-white">
      <div className="bg-white shadow-xl rounded-xl p-8 grid grid-cols-1 md:grid-cols-2  gap-8 max-w-4xl w-full">
        
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Sign Up</h2>
          <p className="text-gray-500 text-center mb-6">Create an account to get started</p>

          <form className="space-y-5">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium">Name :</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Afrad Med"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="exemple@gmail.com"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="**********"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button className="w-full bg-blue-400 text-white py-3 rounded-2xl font-semibold mt-2 hover:bg-blue-600 transition duration-300">
              Sign Up
            </button>
          </form>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <img src="/Images/imaget.png" alt="Registration Illustration" className="max-w-xs" />
        </div>

      </div>
    </div>
  );
}

export default Register;
