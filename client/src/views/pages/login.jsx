import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import showPwdImg from '../assets/show-password.png';
import hidePwdImg from '../assets/hide-password.png';
import {Row} from "react-bootstrap";
import "../css/Form.css"
import {loginUser} from "../../services/authService";


const LoginPage = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    // todo two onChange events in same input? 2/23: const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await loginUser(user);
        if(!response){
           console.log('failed');
            setUser({
                email: '',
                password: '',
            });
            window.location.reload();
        }
        else {
            console.log(response.data);
            setUser({
                email: '',
                password: '',
            });
            navigate('/')
            window.location.reload();
        }
    }

    return(
        <div className="FitBackground">
            <div style={{paddingTop: "5%"}}>
            <div className="text-center mt-5" style={{height: "100%", width: "100%", display: "flex", margin: "auto"}}>
            <div className="LoginBox">
                
                </div>

                <form onSubmit={handleSubmit} className="form bg-light shadow-lg border-3">
                    <h2 className="card-title">Sign In</h2>
                    <Row>
                        <label>
                            <input
                                className="form-control mt-4"
                                onChange={handleChange}
                                name="email"
                                value={user.email}
                                type="text"
                                placeholder="email"
                            />
                        </label>
                        <label>
                            <div className="input-group">
                                <input style={{zIndex: 0}}
                                    className="form-control"
                                    onChange={handleChange}
                                    name="password"
                                    value={user.password}
                                    type={isRevealPwd ? "text" : "password"}
                                    placeholder="password"
                                />
                                <img style={{position: "absolute", left: 185, height: 30, marginTop: 15}}
                                    title={isRevealPwd ? "Hide password" : "Show password"}
                                    src={isRevealPwd ? showPwdImg : hidePwdImg}
                                    alt="EyeIcon"
                                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                                />
                            </div>
                        </label>
                        <div >
                            <button style={{height:40}} className="btn btn-success mt-4 mx-2">Submit</button>
                            <Link to="/" style={{ textDecoration: 'none' }}><button style={{height:40}} className="btn btn-secondary mt-4">Return</button></Link>
                        </div>
                        <Link to="/register"><p className="mt-3 my-auto">Don't have an account?</p></Link>
                    </Row>
                </form>
            </div>
            </div>
        </div>
    )
}

export default LoginPage;

