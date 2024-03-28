import "./frameSignUp.css";

const frameSignUp = () => {
  return (
    <div className="instance-wrapper">
      <div className="frame-wrapper">
        <div className="name-input-parent">
          <div className="name-input">
            <h1 className="get-started-now">Get Started Now</h1>
          </div>
          <div className="enter-your-credentials">
            Enter your Credentials to access your account
          </div>
          <form className="frame-parent">
            <div className="frame-name-parent">
              <div className="frame-name">
                <div className="enter-name-label">
                  <div className="name">Name</div>
                </div>
                <div className="login-link">
                  <input
                    className="google-icon-frame"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
              </div>
              <div className="frame-group">
                <div className="name-wrapper">
                  <div className="name1">Email address</div>
                </div>
                <div className="frame-container">
                  <input
                    className="frame-child"
                    placeholder="Enter your email"
                    type="text"
                  />
                </div>
              </div>
              <div className="frame-div">
                <div className="name-container">
                  <div className="name2">Password</div>
                </div>
                <div className="frame-wrapper1">
                  <input
                    className="frame-item"
                    placeholder="Name"
                    type="text"
                  />
                </div>
              </div>
              <div className="agree-terms-group-parent">
                <div className="agree-terms-group">
                  <div className="agree-terms-group-child" />
                </div>
                <div className="i-agree-to-container">
                  {`I agree to the `}
                  <span className="terms-policy">{`terms & policy`}</span>
                </div>
              </div>
            </div>
            <button className="instance-parent">
              <div className="frame-parent1">
                <div className="name-frame">
                  <div className="name3">Name</div>
                </div>
                <div className="or-separator">
                  <div className="name-wrapper1">
                    <div className="name4">Name</div>
                  </div>
                </div>
              </div>
              <div className="frame-login">
                <b className="login">Signup</b>
              </div>
            </button>
          </form>
          <div className="or-frame">
            <div className="dividers">
              <div className="agree-policy-text" />
              <div className="social-media-frames">
                <div className="or">Or</div>
              </div>
            </div>
          </div>
          <div className="sign-in-with-apple">
            <div className="account-frame">
              <div className="sign-in-link">
                <button className="social-media-icons">
                  <div className="social-media-icons1">
                    <img
                      className="icons8-google-1"
                      alt=""
                      src="/icons8google-1.svg"
                    />
                    <div className="sign-in-with">Sign in with Google</div>
                  </div>
                </button>
              </div>
              <button className="divider-frame">
                <div className="have-an-account-text">
                  <img
                    className="icons8-apple-logo-1"
                    alt=""
                    src="/icons8applelogo-1.svg"
                  />
                  <div className="sign-in-with1">Sign in with Apple</div>
                </div>
              </button>
            </div>
            <div className="frames-for-content">
              <div className="frames-for-content1">
                <div className="have-an-account-sign-in-wrapper">
                  <div className="have-an-account-container">
                    <span className="have-an-account">{`Have an account?  `}</span>
                    <span className="sign-in">Sign In</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

  export default frameSignUp;