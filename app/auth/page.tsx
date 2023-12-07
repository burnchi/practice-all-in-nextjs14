"use client"
import { signIn } from 'next-auth/react';
import React from 'react'

const Authpage = () => {
  return (
    <div className='max-w-xl h-screen mx-auto flex flex-col justify-center'>
      <form className='flex flex-col p-10 gap-y-4 ring-2 ring-blue-400' >
        <h1 className=' text-center text-xl font-semibold'>登录界面</h1>
        <div className='flex flex-col'>
          <label htmlFor="email">电子邮件</label>
          <input className='ring-2 ring-blue-200 p-2 focus:outline-blue-500' type="text" id="email" name='email' placeholder='111' autoComplete="off" />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password">密码</label>
          <input id="password" className='ring-2 ring-blue-200 p-2 focus:outline-blue-500' type="text" name='password' placeholder='111' autoComplete="off" />
        </div>
        <button type='submit' className='p-2 bg-blue-500 text-white' >signin</button>
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        className=" bg-green-300"
      >
        Login with Google
      </button>
    </div>
  )
}

export default Authpage