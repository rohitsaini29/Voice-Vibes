'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
export default function Navbar() {
    const [theme, setTheme] = useState(
        (typeof window !== 'undefined' && window.localStorage.getItem("theme")) || "light"
    );

    const handleToggle = (e) => {
        setTheme(e.target.checked ? "light" : "dark");
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem("theme", theme);
            const localTheme = localStorage.getItem("theme") || "light";
            document.querySelector("html").setAttribute("data-theme", localTheme);
        }
    }, [theme]);
    return (
        <div id="navi" className="navbar bg-inherit p-4 ">
            <div className="navbar-start  ">

                <div tabIndex={0} role="button" className="  animate-pulse ">
                    {/* btn btn-ghost btn-circle */}
                    <Image
                        src="/voice.png"
                        width={40}
                        height={10}
                        alt="Picture of the author"
                    />
                </div>
                <a href='/' className=" btn btn-ghost text-xl font-serif font-extrabold text-white">VOICE<span className=' text-sm animate-bounce '>🎙️</span>VIBES</a>



            </div>
            <div className="navbar-center ">
                <ul className="menu menu-horizontal rounded-box ">
                    <li>
                        <a className="tooltip " data-tip="Home" href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        </a>
                    </li>
                    <li>
                        <a className="tooltip" data-tip="Details">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </a>
                    </li>
                    <li>
                        <a className="tooltip" data-tip="Record" href='http://localhost:3000/recognise/record'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <button className="btn btn-ghost btn-circle">
                    <img src='/shield.png'></img>
                </button> */}
                <label className="flex cursor-pointer gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input type="checkbox" value="synthwave" className="toggle theme-controller" onChange={handleToggle} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>

    )
}




















    // <div className="navbar bg-base-100 rounded-lg bg-inherit ring-1 backdrop-blur-sm">
    //     <div className="navbar-start">
    //         <a className="btn btn-ghost text-xl">VOICE VIBES</a>
    //     </div>

    //     <div className="navbar-end">
    //         <a className="btn">Button</a>
    //     </div>
    // </div>