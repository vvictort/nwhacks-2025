import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            <h2>Login</h2>
            <form style={{ width: "200px" }}>
                <input required type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <input required type="text" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login;