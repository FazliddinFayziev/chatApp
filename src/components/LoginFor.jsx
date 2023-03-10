import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const LoginFor = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "7cca0906-029a-47a9-905a-ea0ef23fa4dc", 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            setError("incorrect UserName or Password")
        }

    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        className="input"
                        placeholder='Username'
                        required
                    />
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        placeholder='Password'
                        required
                    />
                    <div align="center">
                        <button type='submit' className='button'>
                            <span>
                                Start Chatting
                            </span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    );
}

export default LoginFor