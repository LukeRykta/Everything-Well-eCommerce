import {Row} from "react-bootstrap";
import showPwdImg from "../assets/show-password.png";
import hidePwdImg from "../assets/hide-password.png";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {registerUser} from "../../services/authService";

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await registerUser(user);
        setUser({
            name: '',
            email: '',
            password: '',
        })
        navigate('/login')
    }

    return (
        <div className="FitBackground">
            <div style={{paddingTop: "5%"}}>
            <div className="text-center container col-11, mt-5 ">
                <form onSubmit={handleSubmit} className="form mt-5 bg-light shadow-lg border-3">
                    <h2>Create an Account</h2>
                    <Row>
                        <label>
                            <input
                                className="form-control mt-4"
                                onChange={handleChange}
                                name="name"
                                value={user.name}
                                type="text"
                                placeholder="name"
                            />
                        </label>
                        <label>
                            <input
                                className="form-control"
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
                                    // todo see above value={pwd}
                                    // todo see above onChange={e => setPwd(e.target.value)}
                                />
                                <img style={{position: "absolute", right: 15, marginTop: 15}}
                                    title={isRevealPwd ? "Hide password" : "Show password"}
                                    src={isRevealPwd ? showPwdImg : hidePwdImg}
                                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                                />
                            </div>
                        </label>
                        <div >
                            <button style={{height:40}} className="btn btn-success mt-4 mx-2">
                                Create
                            </button>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <button style={{height:40}} className="btn btn-secondary mt-4">
                                    Return
                                </button>
                            </Link>
                            <Link to="/login"><p className="mt-3 mb-auto">Already have an account?</p></Link>
                        </div>
                    </Row>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Register;