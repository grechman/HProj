import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VoiceToText from './Components/VoiceToText';
import Profile from './Components/Profile';
import Dashboard from './Pages/Dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/voice-to-text" element={<VoiceToText />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;