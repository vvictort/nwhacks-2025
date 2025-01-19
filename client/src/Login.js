import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/home"); 
    }

    return (
        <div className="login" align="center">
            <h2>Login</h2>
            <form style={{width: "200px"}}>
                <label>Username:</label>
                <input 
                    type="text" 
                    required 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)
                }/><br/>
                <label>Password:</label>
                <input 
                    type="text" 
                    required 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)   
                }/><br/>

                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login;