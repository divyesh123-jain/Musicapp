import React, { useState } from "react";
import Link from "next/link";
import styles from "../sass/_em-login.module.scss";
import { BsEyeFill } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";

function Login() {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
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
    <section className={`${styles["em-signup-section"]} z-[100] `}>
      <div className={`${styles["em-row"]} `}>
        <div className={styles["col-4"]}>
          <div className={styles["em-signup"]}>
            <h3
              className={`${styles["em-welcome"]} text-3xl flex justify-center items-center`}
            >
              Welcome to Emergence <i className={styles["em-eyeglass"]}></i>
            </h3>
            <div className="flex justify-start text-lg text-gray-400">
              Enter your email address and password to access your account.
            </div>
            <form action={`router.push("/artists")`}  className={`${styles["em-form"]} relative`}>
              <div className={`${styles["em-form-group"]}`}>
                <label htmlFor="email">Email address</label>
                <div className={`${styles["em-input"]}`}>
                  <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className={`${styles["form-control"]} w-[100%] flex justify-start border`}
                    id="email"
                    placeholder="Enter email address"
                    required
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
                    type={showPassword ? "text" : "password"}
                    className={`${styles["form-control"]} ${styles["em-hasicon"]}  w-[100%] flex justify-start border`}
                    id="password"
                    placeholder="Enter password"
                    required
                  />
                  {/* <i
                    className={`fa-solid ${showPassword ? 'fa-eye-slash' : styles["em-eye"]}`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i> */}
                  {!showPassword ? (
                    <i onClick={() => setShowPassword(!showPassword)}>
                      {" "}
                      <BsEyeFill />{" "}
                    </i>
                  ) : (
                    <i onClick={() => setShowPassword(!showPassword)}>
                      {" "}
                      <AiFillEyeInvisible />{" "}
                    </i>
                  )}
                </div>
                {/* { errors.password ? <ErrorMessage message={errors.password}/> : ''} */}
                <Link href="/forget-password">Forgot Password?</Link>
              </div>
              <div>
                {/* <button onClick={login} className={styles["em-sign-in-btn"]}> SIGN IN </button> */}
                <button className="flex justify-center items-center pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full text-xl mt-6 w-[100%]" type="submit">
                  Sign In
                </button>
              </div>
              <span className={styles["em-account-login"]}>
                Don’t have an account?{" "}
                <Link href="/signup" className={styles["em-Sign-up-btn"]}>
                  {" "}
                  Sign up <i className={styles["em-infinity"]}></i>{" "}
                </Link>
              </span>
            </form>
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
