'use client';
import React from "react";
import { useState, useEffect } from "react";

import { AudioRecorder } from 'react-audio-voice-recorder';

import HALO from 'vanta/src/vanta.halo'

export default function Recordcard() {
    // const [audioBox, setAudioBox] = useState(0);
    useEffect(() => {
        HALO({
            el: "#vanta3",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            // backgroundColor: 0x42486f
            size: 1.40
        })


    }, []);

    const addAudioElement = (blob) => {
        var url = URL.createObjectURL(blob);
        var audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        // setAudioBox(1);
        const list = document.getElementById("audioBox");
        if (list.firstElementChild) {
            list.removeChild(list.firstElementChild);
        }



        document.getElementById("audioBox").appendChild(audio);
    };

    return (
        <div className="card w-96 bg-neutral text-neutral-content rounded-lg shadow-xl" id="vanta3">
            <div className="card-body items-center rounded-lg text-center ">
                <h2 className="card-title font-roboto font-extrabold text-white pb-2  ">Want To Get Yourself Record ?</h2>
                <figure><img src="/radioset2.png" alt="Shoes" /></figure>


                <div className="card-actions justify-end">
                    <button className="btn btn-error" onClick={() => document.getElementById('my_modal_5').showModal()}>
                        <svg class=" w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                        Start Recording
                    </button>

                </div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg ">Hello!</h3>
                        <p className="py-4">Click on the microphone icon to start recording your voice.</p>

                        <div className="flex flex-col items-center space-y-4 h-30">
                            <div className="mr-4 " id="audioBox"></div>
                            <AudioRecorder
                                onRecordingComplete={addAudioElement}
                                audioTrackConstraints={{
                                    noiseSuppression: true,
                                    echoCancellation: true,
                                }}
                                downloadOnSavePress={true}
                                downloadFileExtension="wav"
                            />
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>
        </div>
    );
}