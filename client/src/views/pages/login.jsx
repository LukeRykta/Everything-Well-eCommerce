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

/*

         <div className="container mt-5">
            <form className="form">
                <h2 className="text-center">Create New Item</h2>
                <Row>
                    <input
                        name="title"
                        onChange={handleChange}
                        value={item.title}
                        className="form-control"
                        placeholder="title"
                        type="text"
                    />
                    <input
                        name="vendor"
                        onChange={handleChange}
                        value={item.vendor}
                        className="form-control"
                        placeholder="vendor"
                        type="text"
                    />
                    <input
                        name="image"
                        onChange={handleChange}
                        value={item.image}
                        className="form-control"
                        placeholder="image (url)"
                        type="text"
                    />
                    <input
                        name="price"
                        onChange={handleChange}
                        value={item.price}
                        className="form-control"
                        placeholder="price"
                        type="text"
                    />
                    <button
                        onClick={handleSubmit}
                        className="btn btn-outline-success mt-3">
                        Create
                    </button>
                </Row>
            </form>
        </div>

 */