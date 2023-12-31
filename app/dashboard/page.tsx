"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Dashboardpage = () => {
    console.log('----------------------------');
    // const session = useSession()
    // console.log(session);

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-bold my-4">Login</h1>
                <form className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Email"
                        className='p-2'
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className='p-2'
                    />
                    <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
                        Login
                    </button>

                    <Link className="text-sm mt-3 text-right" href={"/register"}>
                        Don't have an account? <span className="underline">Register</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Dashboardpage