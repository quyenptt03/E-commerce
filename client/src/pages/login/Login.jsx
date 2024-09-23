import { useState } from "react";
import './login.css';

const Login=()=> {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ email, password, rememberMe });
  };

  return (
      <div className="form-wrap">
          <h1 className="title">Login</h1>
          <form onSubmit={handleSubmit} className="pt-3">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email Address</label>
            </div>

            <div className="form-floating position-relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>

              <span
                                className={`password-show-toggle ${passwordVisible ? 'active' : ''}`}>
                                <span  onClick={togglePasswordVisibility} className={`fas ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}></span>
                                
                              </span>

            </div>

            <div className="login_d-flex">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="">Keep me logged in</label>
              </div>
              <div><a className="login-forgot" href="#">Forgot password?</a></div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Log in</button>
            </div>

            <div className="">Don’t have an account? <a className="login-signup" href="/register">Sign up</a></div>

            <div className="social-account-wrap">
            <h4 className="line-with-text"><span>or continue with</span></h4>
            <ul className="social-account login_d-flex">
                <li><a href="#"><img src="../../../public/images/2023_Facebook_icon.svg.png" alt="Google logo" /></a></li>
                <li><a href="#"><img src="../../../public/images/2023_Facebook_icon.svg.png" alt="Facebook logo" /></a></li>
                <li><a href="#"><img src="../../../public/images/icon-apple.svg" alt="Apple logo" /></a></li>
                <li><a href="#"><img src="../../../public/images/icon-twitter.svg" alt="Twitter logo" /></a></li>
              </ul>
            </div>
          </form>
        </div>
  );
};

export default Login;