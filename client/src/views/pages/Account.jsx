import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteUser, editUser, getUserById} from "../../services/authService";

const Account = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        getUserById(id)
            .then(response => setUser(response.data))
            .catch(error => console.log(error));
    },[])

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await editUser(user, id);
        setUser({
            name: '',
            email: '',
            password: '',
        });
        navigate("/")
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        const choice = window.confirm("Are you sure you want to delete this account?");
        if (!choice)
            return;
        await deleteUser(id)
        navigate("/");
        window.location.reload();
    }

    return (
        <div className="FitBackground">
            <div className="container mt-5 text-center">
                <div style={{paddingTop: "5%"}}>
                    <form onSubmit={handleSubmit} className="form bg-light shadow-lg border-3">
                        <h2 className="mb-4">Edit Account Information</h2>
                        <input
                            onChange={handleChange}
                            value={user.name}
                            name="name"
                            className="form-control"
                            placeholder="name"
                            type="text"
                        />
                        <input
                            onChange={handleChange}
                            name="email"
                            value={user.email}
                            className="form-control"
                            placeholder="email"
                            type="text"
                        />
                        <input
                            onChange={handleChange}
                            name="password"
                            value={user.password}
                            className="form-control"
                            placeholder="password"
                            type="text"
                        />
                        <button className="form-control btn btn-outline-success mt-4 mb-2">Save Changes</button>
                        <button onSubmit={handleDelete} className="form-control btn btn-outline-danger">Delete Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Account;