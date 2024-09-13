'use client';
import React, { useEffect, useState } from "react";
import { Image } from 'antd';
import { Button, message, Space } from 'antd';

export default function Upload() {
    const [messageApi, contextHolder] = message.useMessage();
    const [userInput, setUserInput] = useState("sad");

    const [imgPath, setImgPath] = useState('//media1.giphy.com/media/OPU6wzx8JrHna/200.gif?cid=f694e415k4xyr2f4yakafs9z9w1hkb3c5pchh75vrweth2s8&ep=v1_gifs_search&rid=200.gif&ct=g');
    const [isLoading, setLoading] = useState(false);

    const sendMsg = async (event) => {
        try {
            // setLoading(true);
            console.log("good morning");
            // console.log(process.env.NEXT_GIFHY_API_KEY);
            messageApi.open({
                key: 1,
                type: 'loading',
                content: '𝐃𝐄𝐓𝐄𝐂𝐓𝐈𝐍𝐆 𝐄𝐌𝐎𝐓𝐈𝐎𝐍',
                duration: 0,
            });
            // console.log(event.target.files);
            const audioFile = event.target.files[0];
            // console.log("audioFile:", audioFile);
            if (audioFile) {
                const reader = new FileReader();
                console.log("audio file check");
                reader.onload = async (e) => {
                    try {
                        console.log(e.target.result);
                        const base64AudioData = e.target.result.split(',')[1];
                        const jsonPayload = {
                            audioData: base64AudioData,
                            fileName: 'Audio File',
                        };

                        console.log("send msg");
                        const res = await fetch("http://127.0.0.1:5000/upload", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(jsonPayload),
                        });

                        if (res.ok) {
                            const resData = await res.json();
                            console.log(resData);
                            setUserInput(resData.message);

                            let giphyAPIURL = `https://api.giphy.com/v1/gifs/search?q=${resData.message}&rating=g&api_key=${"wmgf096vzH3vdPwy4O4A6VmGu004cUl6"}`;

                            fetch(giphyAPIURL)
                                .then(function (data) {
                                    return data.json();
                                })
                                .then(function (json) {
                                    if (json.data && json.data.length > 0) {
                                        console.log(json.data[0].images.fixed_height.url);
                                        // setImgPath(json.data[0].images.fixed_height.url);
                                    } else {
                                        messageApi.open({
                                            key: 1,
                                            type: 'error',
                                            content: `Error Occurred: ${error.message}`,
                                            duration: 2,
                                        });
                                        throw new Error('No Giphy images found.');
                                    }
                                })
                                .then(function () {
                                    messageApi.open({
                                        key: 1,
                                        type: 'success',
                                        content: '𝐄𝐌𝐎𝐓𝐈𝐎𝐍 𝐃𝐄𝐓𝐄𝐂𝐓𝐄𝐃',
                                        duration: 5,
                                    });

                                    setTimeout(() => {
                                        document.getElementById('my_modal_2').showModal();
                                    }, 1000);
                                })
                                .catch((error) => {
                                    // messageApi.open({
                                    //     key: 1,
                                    //     type: 'error',
                                    //     content: `Error Occurred: ${error.message}`,
                                    //     duration: 2,
                                    // });
                                    // throw new Error(`Error fetching Giphy: ${error.message}`);
                                    setTimeout(() => {
                                        document.getElementById('my_modal_2').showModal();
                                    }, 1000);
                                });
                        } else {
                            throw new Error('Server response not OK');
                        }
                    } catch (error) {
                        messageApi.open({
                            key: 1,
                            type: 'error',
                            content: `Error Occurred: ${error.message}`,
                            duration: 2,
                        });
                        throw new Error(`Error processing response: ${error.message}`);
                    }
                };

                reader.readAsDataURL(audioFile);
            } else {
                messageApi.open({
                    key: 1,
                    type: 'error',
                    content: `Error Occurred: ${error.message}`,
                    duration: 2,
                });
                throw new Error('No audio file selected.');
            }
        } catch (error) {
            messageApi.open({
                key: 1,
                type: 'error',
                content: `Error Occurred: ${error.message}`,
                duration: 2,
            });
            console.error('Error:', error);
        }
    };

    return (

        < div className="flex flex-row justify-center " >
            {contextHolder}
            <input
                type="file"
                accept="audio/*"
                onChange={(e) => sendMsg(e)}
                className="file-input file-input-bordered file-input-primary w-4/5 max-w-xs ring-4"
            />
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box ">
                    <h3 className="font-bold text-lg text-center ">{`Emotion Detected : ${userInput}`}</h3>
                    <div className="flex flex-col items-center mt-4 ">
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                            }}
                        >
                            <Image width={200} src={imgPath} />


                        </Image.PreviewGroup>
                    </div>
                    <p className="py-4 text-center">Hope u have a nice day</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


        </div >

    );
}
