import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {isAuthenticated} from "../../services/authService";

const ItemDetails = () => {
    const user = isAuthenticated();
    const apiUrl = process.env.REACT_APP_API_URL;
    const [item, setItem] = useState({})
    const { id } = useParams();

    useEffect(() => {
        getItem();
    }, []);

    const getItem = async () => {
        const response = await axios.get(`${apiUrl}/items/item/${id}`);
        setItem(response.data);
    }

    return (
        <div className="form container mt-3" style={{width: "40%"}}>
            <div className="text-center">
                <div className="card-header" style={{borderRadius: "10px"}}>
                    <h1>{item.title}</h1>
                    <h3>${item.price}</h3>
                </div>
                <div className="mt-5 container">
                    <img style={{width: "75%"}} src={item.image} alt="image not found :/" />
                </div>
                <h4 className="mt-5"><span style={{color: "blue"}}>{item.quantity}</span> in stock</h4>
                <div className="card-img-bottom mt-5">
                    <button className="btn btn-success mx-1 my-1">Add to Cart</button>
                    { user.role === 'ADMIN' &&(
                        <Link to={`/editItem/${item._id}`} style={{ textDecoration: 'none' }}>
                            <button className="btn btn-danger mx-1 my-1">Edit</button>
                        </Link>
                    )}
                    <Link to="/nutrition" style={{ textDecoration: 'none' }}>
                        <button className="btn btn-secondary mx-1 my-1">Return</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails;
