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
        quantity: "",
        track: '',
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
        setItem({
            title: '',
            vendor: '',
            image: '',
            price: '',
            quantity: '',
            track: '',
        });
        navigate("/")
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        const choice = window.confirm("Are you sure you want to delete this item?");
        if (!choice)
            return;
        deleteItem(id)
        navigate("/");
        window.location.reload();
    }

    return (
        <div className="FitBackground">
            <div className="container mt-5 text-center">
                <div style={{paddingTop: "5%"}}>
                    <form onSubmit={handleSubmit} className="form bg-light shadow-lg border-3">
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
                        <input
                            onChange={handleChange}
                            name="quantity"
                            value={item.quantity}
                            className="form-control"
                            placeholder="quantity"
                            type="text"
                        />
                        <input
                            onChange={handleChange}
                            name="track"
                            value={item.track}
                            className="form-control"
                            placeholder="track"
                            type="text"
                        />
                        <button className="form-control btn btn-outline-success mt-4 mb-2">Save Changes</button>
                        <button onClick={handleDelete} className="form-control btn btn-outline-danger">Delete Item</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditItem;