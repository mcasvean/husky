import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    function handleLogin() {
        login();
        navigate("/reducer-second");
    }

    return (
        <div>
            <h1>Login</h1>

            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default Login;
