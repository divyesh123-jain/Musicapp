import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../sass/_em-login.module.scss";

function Login() {
  const [credential, setCredential] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (evt) => {
    const value = evt.target.value;

    setCredential({
      ...credential,
      [evt.target.name]: value,
    });
  };

  return (
    <section className={styles["em-signup-section"]}>
      <div className={styles["em-row"]}>
        <div className={styles["col-4"]}>
          <div className={styles["em-signup"]}>
            <h3 className={styles["em-welcome"]}>
              Welcome to Emergence <i className={styles["em-eyeglass"]}></i>
            </h3>
            <em>Enter your email address and password to access your account.</em>
            <div className={styles["em-form"]}>
              <div className={styles["em-form-group"]}>
                <label htmlFor="email">Email address</label>
                <div className={styles["em-input"]}>
                  <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className={styles["form-control"]}
                    id="email"
                    placeholder="Enter email address"
                  />
                </div>
                {/* { errors.email ? <ErrorMessage message={errors.email}/> : ''} */}
              </div>
              <div className={styles["em-form-group"]}>
                <label htmlFor="password">password</label>
                <div className={styles["em-input"]}>
                  <input
                    onChange={handleChange}
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    className={`${styles["form-control"]} ${styles["em-hasicon"]}`}
                    id="password"
                    placeholder="Enter password"
                  />
                  <i
                    className={`fa-solid ${showPassword ? 'fa-eye-slash' : styles["em-eye"]}`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </div>
                {/* { errors.password ? <ErrorMessage message={errors.password}/> : ''} */}
                <Link href="/forget-password">Forgot Password?</Link>
              </div>
              <div>
                {/* <button onClick={login} className={styles["em-sign-in-btn"]}> SIGN IN </button> */}
              </div>
              <span className={styles["em-account-login"]}>
                Don’t have an account? <Link href="/signup" className={styles["em-Sign-up-btn"]}> Sign up <i className={styles["em-infinity"]}></i> </Link>
              </span>
            </div>
          </div>
        </div>
        <div className={styles["col-8"]}>
          <div className={styles["em-info"]}>
            {/* <figure> */}
            {/* <Link to="/" className="nav-link"><img src={ImagePath.icLogoWithName} className="img-fluid" alt="" /></Link></figure> */}
            {/* <p>Emergence Music Distribution was created first and foremost for artists to get noticed and discovered internationally. After observing a lack of services other digital distributions were offering, we decided to offer a revolutionary plan that will disrupt and forever change the music industry. At Emergence Music Distribution, each artist will be represented equally and will access the same promotional service as they would with a major label.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
