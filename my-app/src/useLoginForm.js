import { useState } from 'react';
import users from './Authentication';

function useLoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState(false);
    const [isUser, setIsUser] = useState(true);

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (users[username] && users[username] === password) {
            setUsername(username);
            setPassword(password);
            setSubmit(true);
        } else {
            setIsUser(false);
        }
    }

    return {
        username,
        password,
        submit,
        isUser,
        handleUsername,
        handlePassword,
        handleSubmit,
    };
}

export default useLoginForm;