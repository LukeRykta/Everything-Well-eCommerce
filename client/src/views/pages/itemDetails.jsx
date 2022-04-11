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
        <div className="text-center col-11 mt-5">
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
            <div className="mt-5">
                <img style={{height:400}} src={item.image} alt="" />
            </div>
            <form className="form mt-5 p-4">
                <button className="btn btn-outline-success mx-1 my-1">add to cart</button>
                { user.role === 'ADMIN' &&(
                    <Link to={`/editItem/$item._id}`} style={{ textDecoration: 'none' }}>
                        <button className="btn btn-outline-danger mx-1 my-1">edit</button>
                    </Link>
                )}
                <Link to="/nutrition" style={{ textDecoration: 'none' }}>
                    <button className="btn btn-outline-secondary mx-1 my-1">Return</button>
                </Link>
            </form>
        </div>
    )
}

export default ItemDetails;
