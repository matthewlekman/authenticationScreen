import React from 'react';
import companyLogo from './assets/logo.svg';
import './styles/LogoStyles.css';
import useLoginForm from './useLoginForm';

function Logo() {
    return (
    <div>
        <img src={companyLogo} className="logo center-wrapper" alt="Company Logo" />
        <h1>SkyVault</h1>
    </div>
    )
}

function Username({ username, handleUsername }) {
    return (
    <div className="center">
        <label>username: </label>
        <input type="text" value={username} onChange={handleUsername}></input>
    </div>
    )
}

function Password({ password, handlePassword }) {
    return (
    <div className="center">
        <label>password: </label>
        <input type="password" value={password} onChange={handlePassword}></input>
    </div>
    )
}

/*function Output({ username, password }) {
    return (
        <div>
            <label>details: {username}, {password}</label>
        </div>
    )
}*/

function LoginForm() {

    const {
    username,
    password,
    handleUsername,
    handlePassword,
    handleSubmit,
    isUser,
    submit,
  } = useLoginForm();

    return (
    <form onSubmit={handleSubmit}>
        <Logo/>
        <Username username={username} handleUsername={handleUsername} />
        <Password password={password} handlePassword={handlePassword} />
        <div className="center">
            <button>submit</button>
        </div>
    </form>
    );
}

export default LoginForm;