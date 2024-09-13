'use client';
import React from "react";


export default function Chat() {
    return (

        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="/mic.jpg" />
                </div>
            </div>
            <div className="chat-bubble bg-purple-400 text-md font-sans font-semibold text-white">"Ready to make your voice heard? Simply upload your audio file, and let's bring your words to life!"</div>
            {/* <div className="lg:tooltip lg:tooltip-primary " data-tip="👇🏻"  >
                                       <button className="btn btn-primary w-56 text-black font-sans font-extrabold bg-purple-200 hover:bg-purple-400 ">Record Now</button>
                                    </div> */}
        </div>

    );
}