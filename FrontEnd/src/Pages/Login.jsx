import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-white">
      <div className="bg-white shadow-lg rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full  my-4"> {/* Ajout de mx-auto et my-8 */}
        
        {/* Section Image */}
        <div className="hidden md:flex justify-center items-center">
          <img src="Images/imaget.png" alt="Login Illustration" className="max-w-xs" />
        </div>

        {/* Section Formulaire */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Sign In</h2>
          <p className="text-gray-500 text-center mb-6">Login to access your account</p>

          <form className="space-y-5">
            {/* Champ Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-lg p-2.5 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <svg
                  className="absolute left-3 top-3.5"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </div>
            </div>

            {/* Champ Mot de Passe */}
            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Enter your password"
                  className="border border-gray-300 rounded-lg p-2.5 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <svg
                  className="absolute left-3 top-3.5"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 17C11.4696 17 10.9609 16.7893 10.5858 16.4142C10.2107 16.0391 10 15.5304 10 15C10 13.89 10.89 13 12 13C12.5304 13 13.0391 13.2107 13.4142 13.5858C13.7893 13.9609 14 14.4696 14 15C14 15.5304 13.7893 16.0391 13.4142 16.4142C13.0391 16.7893 12.5304 17 12 17ZM18 20V10H6V20H18ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V10C4 8.89 4.89 8 6 8H7V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6V8H18Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
            </div>

            {/* Bouton de connexion */}
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 21h-11c-.621 0-1.125-.504-1.125-1.125v-15.75c0-.621.504-1.125 1.125-1.125h11c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125zm-5.5-18c-1.242 0-2.25 1.008-2.25 2.25s1.008 2.25 2.25 2.25 2.25-1.008 2.25-2.25-1.008-2.25-2.25-2.25z" fill="#000000"/>
                </svg>
                Continue with Apple
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center text-sm text-gray-500">
              Don't have an account? <a href="/register" className="text-blue-500 font-semibold hover:underline">Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;