import "../login/login.css";
import { useState } from "react";

const Register = ()=> {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
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
          <h1 className="title">Register</h1>
          <form onSubmit={handleSubmit} className="pt-3">
          <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="email">Full name</label>
            </div>
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
                            <label  >I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                        </div>
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Create an account</button>
                    </div>

                    <div>Already a member? <a className="login-signup" href="/login">Log in</a></div>

            <div className="social-account-wrap">
            <h4 className="line-with-text"><span>or continue with</span></h4>
            <ul className="social-account login_d-flex">
                <li><a href="#"><img src="../../../public/images/icon-google.svg" alt="Google logo" /></a></li>
                <li><a href="#"><img src="../../../public/images/icon-facebook.svg" alt="Facebook logo" /></a></li>
                <li><a href="#"><img src="../../../public/images/icon-apple.svg" alt="Apple logo" /></a></li>
                <li><a href="#"><img src="../../../public/images/icon-twitter.svg" alt="Twitter logo" /></a></li>
              </ul>
            </div>
            
          </form>
        </div>
  );
};

export default Register;