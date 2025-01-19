import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || {};
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        navigate("/home");
    }

    return (
        <div className="login-sign" align="center" style={{ display: "flex", justifyContent: "center" }}>
            <div className="shape shape1"></div>
            <div className="shape shape2"></div>
            <div className="shape shape3"></div>
            <div className="shape shape4"></div>
            <form className="login-form">
                <div className="welcome">
                    <h1>Slyther</h1><br />
                    <h2>Welcome to Slyther! </h2>
                    <h4>Please sign-in to your account and save money today.</h4><br />
                </div>

                <label htmlFor="username">Email or Username</label>
                <input required type="text" value={username} placeholder="Enter your email or username" onChange={(e) => setUsername(e.target.value)}></input>

                <label htmlFor="password">Password</label>
                <input required type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>

                <div className="remember-me">
                    <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                    <label htmlFor="rememberMe">Remember me</label>
                </div>

                <button className="login-button" onClick={handleLogin}>Login</button>

                <div className="separator">
                    <span>or</span>
                </div>

                <div className="social">
                    <div className="instagram">
                        <i className="fab fa-instagram"></i>
                    </div>

                    <div className="facebook">
                        <i className="fab fa-google"></i>
                    </div>
                </div>

            </form >
        </div >
    );
}

export default Login;