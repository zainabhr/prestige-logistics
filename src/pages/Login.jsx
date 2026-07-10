import LoginPhoto from '../assets/login page.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import apiClient from '../services/api';

function Login(){
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()

        const loginData = {
            phone: phone,
            password: password
        }

        apiClient.post('/adminlogin',loginData).then(response =>{
            console.log('تم تسجيل الدخول بنجاح ', response)
            const token = response.data.token;
            localStorage.setItem('admin_token', token)

            navigate('/dashboard')
        })
        .catch (err =>{
            console.error('خطأ في تسجيل الدخول:', err)
            setErrMsg('رقم الهاتف أو كلمة المرور غير صحيحة')
        })
        // navigate('/dashboard')

    }
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
                        {errMsg && <p style={{color: '#f00'}}> {errMsg}</p>}

                        <form onSubmit={handleLogin}>
                            <div>
                                <label>Phone Number</label>
                                <div className="input-wrapper">
                                    <i className="fa-regular fa-envelope"></i>
                                    <input 
                                        type="tel" 
                                        placeholder="0933226655"
                                        name='phone'
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                        />
                                </div>
                            </div>

                            <div>
                                <label>Password</label>
                                <div className="input-wrapper">
                                    <i className="fa-solid fa-lock"></i>
                                    <input 
                                        type={showPassword? 'text' : "password"} 
                                        placeholder="password123"
                                        name='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        />
                                    <i className={`fa-regular ${showPassword ? 'fa-eye-slash':'fa-eye'} toggle-password`}
                                        onClick={() => setShowPassword(!showPassword)}></i>
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