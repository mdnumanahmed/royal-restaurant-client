import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  const handleVerifyCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  placeholder="Type above text"
                  className="input input-bordered"
                />
                <button className="btn btn-xs" onClick={handleVerifyCaptcha}>
                  Verify
                </button>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  disabled={disabled}
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
            <div>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="grid h-10 card bg-base-100 rounded-box place-items-center">
                  <p>
                    New Here? <Link to="/register">Create An Account</Link>
                  </p>
                </div>
                <div className="divider">OR</div>
                <div className="grid h-10 card bg-base-100 rounded-box place-items-center">
                  content
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
