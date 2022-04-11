import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {deleteItem, editItem, getItemById} from "../../services/itemService";

const EditItem = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [item, setItem] = useState({
        title: "",
        vendor: "",
        image: "",
        price: "",
    });

    useEffect(() => {
        getItemById(id)
            .then(response => setItem(response.data))
            .catch(error => console.log(error));
    },[])

    const handleChange = (event) => {
        setItem({
            ...item,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await editItem(item, id);
        navigate("/nutrition")
        setItem({
            title: '',
            vendor: '',
            image: '',
            price: '',
        });
        window.location.reload();
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        const choice = window.confirm("Are you sure you want to delete this item?");
        if (!choice) return;
        deleteItem(id)
        navigate("/nutrition");
    }

    return (
        <div className="container mt-5 text-center">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="mb-4">Edit Item</h2>
                <input
                    onChange={handleChange}
                    value={item.title}
                    name="title"
                    className="form-control"
                    placeholder="title"
                    type="text"
                />
                <input
                    onChange={handleChange}
                    name="vendor"
                    value={item.vendor}
                    className="form-control"
                    placeholder="vendor"
                    type="text"
                />
                <input
                    onChange={handleChange}
                    name="image"
                    value={item.image}
                    className="form-control"
                    placeholder="image (url)"
                    type="text"
                />
                <input
                    onChange={handleChange}
                    name="price"
                    value={item.price}
                    className="form-control"
                    placeholder="price"
                    type="text"
                />
                <button className="form-control btn btn-outline-success mt-4 mb-2">Save Changes</button>
                <button onClick={handleDelete} className="form-control btn btn-outline-danger">Delete Item</button>
            </form>
        </div>
    )
}

export default EditItem;