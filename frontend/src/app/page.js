'use client';
import { useEffect, useState } from "react";
import RINGS from 'vanta/src/vanta.net'
import Navbar from "./components/navbar";
import Hero from "./components/hero";
export default function Home() {

  const [theme, setTheme] = useState(
    (typeof window !== 'undefined' && window.localStorage.getItem("theme")) || "light"
  );


  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme") || "light";
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }
  }, [theme]);

  useEffect(() => {
    RINGS({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      points: 16.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3f79ff,

      // backgroundColor: theme == "light" ? 0xffffff : 0x000000,
      backgroundColor: 0x302c36,
    }
    )

  }, [])
  return (
    <div className=' min-h-screen'>
      <div className='h-screen p-2' id="vanta">
        <Navbar />
        <Hero />
      </div>

    </div>

  );
}











    // mouseControls: true,
      // touchControls: true,
      // gyroControls: false,
      // minHeight: 200.00,
      // minWidth: 200.00,
      // scale: 1.00,
      // scaleMobile: 1.00,
      // backgroundColor: 0x0