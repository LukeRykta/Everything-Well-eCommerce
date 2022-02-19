import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

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
        <div className="btn col-11">
            <img src={item.image} />
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
        </div>

    )
}

export default ItemDetails;