import React, { useState } from "react";
import SpeechRecognition , { useSpeechRecognition } from "react-speech-recognition";

const VoiceToText = () => {
    const [text, setText] = useState('');
    const { transcript, resetTranscript } = useSpeechRecognition();

    const handleSave = async () => {
        const response = await fetch('/api/voice-to-text', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ text: transcript }),
        });
        if (response.ok) {
            alert('Request saved!');
            resetTranscript();
        }
    };
    return (
        <div>
            <button onClick={SpeechRecognition.startListening}>Start Listening</button>
            <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
            <p>{transcript}</p>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default VoiceToText;