import { Row, Col, Input, Button } from "antd";
import { useState } from "react";
import googleIcon from "./images/google.png";
import fbIcon from "./images/fb.png";
import "./login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Add login logic here
        console.log("Logging in with:", email, password);
    };

    const handleGoogleLogin = () => {
        // Add Google login logic here
        console.log("Logging in with Google");
    };

    const handleFacebookLogin = () => {
        // Add Facebook login logic here
        console.log("Logging in with Facebook");
    };

    return (
        <div className="login-container">
            
            <Row style={{ height: "100vh" }}>
                {/* Left side: Login Form */}
                <Col xs={24} md={12} className="login-form-container">
           
                    <div className="login-form">
                    <h1> Chào mừng bạn, đến với Collab  👋</h1>
                        <p>Vui lòng đăng nhập để tiếp tục sử dụng 
                        và trải nghiệm những điều tuyệt vời ở Collab</p>
                        <Input
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="login-input"
                        />
                        <Input.Password
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />
                        <Button type="primary" onClick={handleLogin} className="login-button">
                            Đăng nhập
                        </Button>
                        <div className="separator">or</div>
                        <div className="social-login-buttons">
                            <Button
                                onClick={handleGoogleLogin}
                                className="social-login-button google"
                            >
                              <img src={googleIcon} alt="Google" className="social-icon" />
                              Đăng nhập với Google
                            </Button>
                            <Button
                                onClick={handleFacebookLogin}
                                className="social-login-button facebook"
                            >
                                <img src={fbIcon} alt=""/>
                                Đăng nhập với Facebook
                            </Button>
                        </div>
                    </div>
                </Col>
                
                {/* Right side: Image */}
                <Col xs={0} md={12} className="login-image-container">
                    <div className="login-image" />
                </Col>
            </Row>
        </div>
    );
}

export default Login;
