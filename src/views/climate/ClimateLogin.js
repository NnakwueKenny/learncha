import React from 'react'
import ClimateHeader from './components/ClimateHeader'
import Intro from './components/Intro'

const ClimateLogin = () => {
  return (
    <div data-scroll class="promo relative w-full flex flex-col items-center py-4">
        <ClimateHeader title='Climate'/>
        <div class="w-full max-w-4xl h-full flex flex-col items-center justify-start gap-6 px-6 py-4 mt-4 border-2 border-dashed rounded-xl">
            <h2  class='w-full max-w-2xl px-3 font-orbitron text-3xl font-bold text-center'>Login</h2>
            <form id='login-form' class='font-orbitron w-full max-w-2xl p-6 md:py-8 md:px-10 md:p-6 bg-white bg-opacity-25 rounded-2xl text-white'>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="username" id="username" class="block py-3 pt-5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#173A82] peer" placeholder=" " required />
                    <label for="username" class="peer-focus:font-medium absolute text-xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#173A82] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                </div>
                <div class="relative z-0 mb-4 w-full group">
                    <input type="password" name="password" id="password" class="block py-3 pt-5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#173A82] peer" placeholder=" " required />
                    <label for="password" class="peer-focus:font-medium absolute text-xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#173A82] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div class='login-message hidden'><span class="login-message-content block pb-3 font-semibold"></span></div>
                <div class='pb-4'>
                    <span>Not a user? <a class='text-[#173A82] font-semibold px-2' href='register.html'> Register</a></span>
                </div>
                <button type="button" id='login-btn' class="text-white bg-[#173A82] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center">Login</button>
            </form>
        </div>
    </div>
  )
}

export default ClimateLogin