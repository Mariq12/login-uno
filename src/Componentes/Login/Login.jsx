import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text"
                        placeholder="Usuaro" required />
                        <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password"
                        placeholder="Contraseña" required />
                        <FaLock  className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" /> Recordar</label>
                    <a href="#">¿Has olvidado tu contraseña?</a>
                </div>
                <button type="submit">Ingresar</button>
                <div className="register-link">
                    <p>No tienes una cuenta? <a href="#">Registrar</a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;