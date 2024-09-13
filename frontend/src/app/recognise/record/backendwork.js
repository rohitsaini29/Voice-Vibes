'use client';
import React, { useState } from 'react';

const FileUploadButton = () => {
    const [audioData, setAudioData] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                // e.target.result contains the audio data
                console.log(e.target.result);
                setAudioData(e.target.result);
            };

            // Use readAsDataURL for a data URL or readAsArrayBuffer for an ArrayBuffer
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = () => {
        // You can now use the audioData variable as needed
        if (audioData) {
            console.log('Audio data:', audioData);
            // Perform additional processing or send to the server
        } else {
            console.log('No audio data available');
        }
    };


    // ***********************before upload component was made *************************************

    const sendmsg = async () => {
        try {
            console.log("send msg");
            const res = await fetch("http://127.0.0.1:5000/upload", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify("hi i am your msg"),
            });
            if (res.ok) {
                // const resData = await res.json();
                console.log(res);
            }
            else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
        // const file = event.target.files[0];
        // if (file) {
        //     const reader = new FileReader();
        //     reader.onload = (e) => {
        //         // e.target.result contains the audio data
        //         setAudioData(e.target.result);

        //         // Call handleUpload immediately upon selecting the file
        //         handleUpload(e.target.result);
        //     };
        //     // Use readAsDataURL for a data URL or readAsArrayBuffer for an ArrayBuffer
        //     reader.readAsDataURL(file);
        //}
        //}
        ;

    const handleUpload2 = (dataURL) => {
        // Convert audioData to a base64-encoded string
        const base64AudioData = dataURL.split(',')[1];

        // Create a JSON object with the audio data
        const jsonPayload = {
            audioData: base64AudioData,
            fileName: 'your_audio_file_name', // You can customize the file name
        };

        // Send the JSON object to the Flask backend
        fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonPayload),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Server response:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    // *************************upload button API call ****************************************

    // useEffect(() => {
    //     document.getElementById('my_modal_2').showModal();
    // }, [])
    // const sendMsg = async (event) => {
    //     try {
    //         // setLoading(true);
    //         messageApi.open({
    //             type: 'loading',
    //             content: '𝐃𝐄𝐓𝐄𝐂𝐓𝐈𝐍𝐆 𝐄𝐌𝐎𝐓𝐈𝐎𝐍',
    //         });
    //         const audioFile = event.target.files[0];
    //         if (file) {
    //             reader.onload = async (e) => {
    //                 console.log(e.target.result);
    //                 const base64AudioData = e.target.result.split(',')[1];
    //                 const jsonPayload = {
    //                     audioData: base64AudioData,
    //                     fileName: 'Audio File', // You can customize the file name
    //                 };
    //                 console.log("send msg");
    //                 const res = await fetch("http://127.0.0.1:5000/upload", {
    //                     method: 'POST',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                     },
    //                     body: JSON.stringify(jsonPayload),
    //                 });

    //                 if (res.ok) {
    //                     const resData = await res.json();
    //                     console.log(resData.message);
    //                     setUserInput(resData.message);
    //                     let giphyAPIURL = `https://api.giphy.com/v1/gifs/search?q=${resData.message}&rating=g&api_key=${giphyAPIkey}`;

    //                     fetch(giphyAPIURL)
    //                         .then(function (data) {
    //                             return data.json();
    //                         })
    //                         .then(function (json) {
    //                             console.log(json.data[0].images.fixed_height.url);
    //                             setImgPath(json.data[0].images.fixed_height.url);
    //                         }).then(function () {
    //                             messageApi.open({
    //                                 type: 'success',
    //                                 content: '𝐄𝐌𝐎𝐓𝐈𝐎𝐍 𝐃𝐄𝐓𝐄𝐂𝐓𝐄𝐃',
    //                             });
    //                             // setLoading(false);
    //                             setTimeout(() => {
    //                                 document.getElementById('my_modal_2').showModal();

    //                             }, 1000)

    //                         });
    //                 } else {
    //                     messageApi.open({
    //                         type: 'error',
    //                         content: 'Error Occured',
    //                     });
    //                     console.error('Failed to send message');
    //                 }
    //             }
    //         };
    //     } catch (error) {
    //         messageApi.open({
    //             type: 'error',
    //             content: 'Error Occured',
    //         });
    //         console.error('Error:', error);
    //     }
    // };

    return (
        <div>
            <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
            />
            <p>Selected Audio: {audioData ? 'Available' : 'None'}</p>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUploadButton;
