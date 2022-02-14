import React from "react";
import {Link} from "react-router-dom";


const LogInPage = () => {
    return(
        <div className="Home">
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="text"/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                    <button>
                        <Link to="/" className="Home">Return</Link>
                    </button>
                </div>
            </form>
        </div>
    )
}
export default LogInPage;

