import LoginPhoto from '../assets/login page.png'

function Login(){
    return(
        <section dir='ltr' className='login'>
            <div className="left-side">
                <div className='img-holder'>
                    <img src={LoginPhoto} alt="" />
                </div>
                <h2>CulinaryLogix</h2>
                <p>Architectural precision in restaurant logistics and driver
                    fleet management. Secure, reliable, and authoritative
                    control at your fingertips.</p>
            </div>
            <div className="right-side">
                <div className="header">
                    <button> <i className="fa-solid fa-globe"></i> العربية </button>
                    <a href="">SUPPORT</a>
                </div>
                <div className='container'>
                    <div className="login-box">
                        <h1>Welcome Back</h1>
                        <p>Please authenticate to access the management portal.</p>

                        <form>
                            <div className="input-group">
                                <label>Email Address</label>
                                <div className="input-wrapper">
                                    <i className="fa-regular fa-envelope"></i>
                                    <input type="email" placeholder="admin@culinarylogix.com"  />
                                </div>
                            </div>

                            <div className="input-group">
                                <label>Password</label>
                                <div className="input-wrapper">
                                    <i className="fa-solid fa-lock"></i>
                                    <input type="password" placeholder="password123" />
                                    <i className="fa-regular fa-eye toggle-password"></i>
                                </div>
                            </div>

                            <div className="options-row">
                                <label className="remember-me">
                                    <input type="checkbox" /> Remember me
                                </label>
                                <a href="#" className="forgot-password">Forgot password?</a>
                            </div>

                            <button type="submit" className="submit-btn">
                                SIGN IN TO PORTAL
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;