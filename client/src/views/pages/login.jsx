import React from "react";
import {Link} from "react-router-dom";

const LogInPage = () => {
    return(
        <div className="container col-11, mt-5">
            <h1>Please Log In</h1>
            <form>
                <label className="col-11">
                    <p>Username</p>
                    <input type="text"/>
                </label>
                <label className="col-11">
                    <p className="mt-3">Password</p>
                    <input type="text"/>
                </label>
                <div className="col-9">
                    <button type="submit" className="mt-4">Submit</button>
                    <button>
                        <Link to="/" className="container">Return</Link>
                    </button>
                </div>
            </form>
        </div>
    )
}
export default LogInPage;

