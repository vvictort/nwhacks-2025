import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || {};
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        navigate("/home");
    }

    return (
        <div className="login" align="center">
            <div>
                <form>
                    <h2>User Login</h2>

                    <label htmlFor="username">Username</label>
                    <input required type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br />

                    <label htmlFor="password">Password</label>
                    <input required type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
                    <button classname="login-button" onClick={handleLogin}>Login</button>

                    <div class="social">
                        <div class="instagram">
                            <i class="fab fa-instagram"></i>
                        </div>

                        <div class="facebook">
                            <i class="fab fa-google"></i>
                        </div>
                    </div>

                </form>
            </div>


        </div>
    );
}

export default Login;