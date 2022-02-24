import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import showPwdImg from '../assets/show-password.png';
import hidePwdImg from '../assets/hide-password.png';


const LoginPage = () => {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    return(
        <div className="container col-11, mt-5 ">
            <h1>Please Log In</h1>
            <form className="mt-5">
                <label className="col-11">
                    <p>Username</p>
                    <input type="text"/>
                </label>
                <label className="col-10">
                    <p className="mt-3">Password</p>
                    <input
                        type={isRevealPwd ? "text" : "password"}
                        value={pwd}
                        onChange={e => setPwd(e.target.value)}
                    />
                    <img
                        title={isRevealPwd ? "Hide password" : "Show password"}
                        src={isRevealPwd ? hidePwdImg : showPwdImg}
                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                    />
                </label>
                <div className="col-9">
                    <button type="submit" className="btn btn-outline-secondary btn-outline-success mt-4">Submit</button>
                    <Link to="/" style={{ textDecoration: 'none' }}><button className="btn btn-outline-secondary mt-4">Return</button></Link>
                </div>
            </form>
        </div>
    )
}
export default LoginPage;

