import React from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/images/logo.svg';
import back from '../../assets/images/success-background.svg';
import heart from '../../assets/images/icons/purple-heart.svg';
import smile from '../../assets/images/icons/smile.svg';

import './styles.css';

function SignIn() {
    return (
        <div id="page-signin">
            <div className="page-signin-content">

                <div className="logo-content">
                    <div className="logo-content-background" style={{ background: `url(${back})` }}>
                        <div className="logo-content-box-internal">
                            <img src={imgLogo} alt="logo" />
                            <h2>Your online study platform</h2>
                        </div>
                    </div>
                </div>

                <div className="form-content">
                    <form>
                        <legend>Sign in</legend>
                        <fieldset>
                            <input type="email" name="email" id="email" placeholder="youremail@mail.com" />
                            <input type="password" name="password" id="password" placeholder="Password"></input>
                            <div className="signin-options">
                                <div className="check-remember">
                                    <input type="checkbox" name="remember" id="remember" />
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                                <Link to="/" className="link-forgot">Forgot my password</Link>
                            </div>
                            <button type="submit">Sign in
                            </button>
                        </fieldset>
                    </form>
                    <div className="footer-options">
                        <div className="footer-options-top">
                            <label htmlFor="remember">Don't have an account yet?</label>
                            <label htmlFor="remember" className="free">It's free
                                <img src={heart} alt="heart" />
                            </label>
                        </div>
                        <div className="footer-options-bottom">
                            <Link to="/" className="link-signup">Create account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
