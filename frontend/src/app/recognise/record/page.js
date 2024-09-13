'use client';
import React from "react";
import { useEffect } from "react";
import RINGS from 'vanta/src/vanta.net'
import FOG from 'vanta/src/vanta.fog'
import HALO from 'vanta/src/vanta.halo'
import Navbar from "@/app/components/navbar";
import Recordcard from "./recordCard";
import Phone from "./PhoneInput";
export default function Record() {
    
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
            backgroundColor: 0x302c36,
            // backgroundColor: 0x302c36,
        }
        )

    }, []);


    return (
        <div id="vanta" >
            <Navbar />

            <div className="flex flex-row justify-center ">

                <div className="stats  text-primary-content flex flex-row justify-center bg-inherit rounded-lg">
                    <div className="stat bg-inherit">
                        <Phone />
                    </div>

                    <div className="stat flex flex-col items-center justify-center ">
                        <Recordcard />
                    </div>

                </div>
            </div>


        </div>
    );
}
