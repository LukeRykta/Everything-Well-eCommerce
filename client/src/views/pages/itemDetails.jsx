import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Row} from "react-bootstrap";

const ItemDetails = () => {
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
            <Row>
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
            <div className="mt-5">
                <img style={{height:400}} src={item.image} alt="empty" />
            </div>
                <div className="mt-4">
                    <button className="btn btn-outline-success w-auto">add to cart</button>
                </div>
                <Link to="/nutrition" style={{ textDecoration: 'none' }}>
                    <button style={{width:100}} className="btn btn-outline-secondary my-2">Return</button>
                </Link>
            </Row>
        </div>
    )
}

export default ItemDetails;