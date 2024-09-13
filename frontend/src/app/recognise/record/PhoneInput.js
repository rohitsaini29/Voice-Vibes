'use client';
import React from "react";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Navbar from "@/app/components/navbar";
import RINGS from 'vanta/src/vanta.net'
import Chat from "@/app/components/chat";
import Upload from "./upload";
export default function Phone() {

    return (
        <div>

            {/* <Navbar /> */}
            <div className="flex flex-col p-8 "  >
                {/* Phone */}
                <div className="flex flex-row ">
                    <div className="mockup-phone border-primary ring-2">
                        <div className="camera"></div>
                        <div className="display ">
                            <div className="artboard artboard-demo phone-1 flex flex-col justify-start space-y-4 bg-white">
                                <div ><img src="/wait.jpg " /></div>

                                <div className="flex flex-row justify-center">
                                    <progress className="progress  progress-primary w-56"></progress>
                                </div>
                                <Chat />
                                <Upload />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    );

}
// export default dynamic(() => Promise.resolve(Recordcam), { ssr: false });
