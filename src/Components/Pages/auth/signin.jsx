import { Button, Image } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import Logo from '../../../Assets/pictures/Screenshot from 2024-10-05 15-07-52.png'
import { useState } from "react";

const Signin = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <section className="bg-white pt-[3rem]">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8 ms-10">
      <div className="absolute inset-0">
        <img
          className="object-cover object-top w-full h-full rounded-md "
          src="https://i.pinimg.com/564x/e3/c2/d9/e3c2d9fb92756da887c2707fce4188c6.jpg"
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      <div className="relative">
        <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
          <h3 className="text-4xl font-bold text-white">
             Dashboard Access: Monitoring Support for the Visually Impaired
          </h3>
          <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-white"> Data Protection </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-white"> System Alerts </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-white"> Bot Status </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-white"> User Management </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">

      <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
        <Image src={Logo} className="h-[3rem] mb-2"/>
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
        
        <form action="#" method="POST" className="mt-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="email" className="text-base font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email to get started"
                  className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-base font-medium text-gray-900">
                  Password
                </label>

                <a href="#" title="" className="text-sm font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.177-.268 2.291-.753 3.29a13.982 13.982 0 01-4.393 5.825m-5.194-7.046A8.962 8.962 0 0112 3c2.427 0 4.623.96 6.247 2.535m1.664 2.042a8.962 8.962 0 01.089 9.905"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                />
              </div>
            </div>

            <div className="text-center">
             <Button className="bg-[#0496ff] px-[10rem] text-white shadow-shadowed_btn" onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                    navigate('/dashboard/')
                }, 2000)
             }}>{isLoading ? 'Loading...' : 'Sign in'} </Button>
            </div>
          </div>
        </form>

        <div className="mt-3 space-y-3">
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Signin