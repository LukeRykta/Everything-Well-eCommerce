import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import showPwdImg from '../assets/show-password.png';
import hidePwdImg from '../assets/hide-password.png';
import {Row} from "react-bootstrap";
import "../css/Form.css"

const LoginPage = () => {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    return(
        <div className="text-center container col-11, mt-5 ">
            <form className="form mt-5">
                <h2>Please Log In</h2>
                <Row>
                    <label>
                        <input
                            type="text"
                            placeholder="username"
                            className="form-control"
                        />
                    </label>
                    <label>
                        <input
                            type={isRevealPwd ? "text" : "password"}
                            placeholder="password"
                            className="form-control"
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                        />
                        <img
                            title={isRevealPwd ? "Hide password" : "Show password"}
                            src={isRevealPwd ? showPwdImg : hidePwdImg}
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                        />
                    </label>
                    <div >
                        <button type="submit" className="btn btn-outline-secondary btn-outline-success mt-4">Submit</button>
                        <Link to="/" style={{ textDecoration: 'none' }}><button className="btn btn-outline-secondary mt-4">Return</button></Link>
                    </div>
                </Row>
            </form>
        </div>
    )
}

export default LoginPage;