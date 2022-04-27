import { Row } from "react-bootstrap";
import '../css/Form.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../services/itemService";

const AddItem = () => {
    const navigate = useNavigate();
    const [item, setItem] = useState({
        title: "",
        vendor: "",
        image: "",
        price: "",
        quantity: '',
        track: '',
        description: '',
    });


    const handleChange = (event) => {
        setItem({
            ...item,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(item);
        await createItem(item);
        navigate("/"+item.track)
        setItem({
            title: '',
            vendor: '', //where is this from? -
            image: '',
            price: '',
            quantity: '',
            track: '',
            description: '',
        });
        window.location.reload()
    }

    return (
        <div className="FitBackground">
            <div style={{paddingTop: "5%"}}>
            <div className="container mt-5">
                <form className="form mt-5 bg-light shadow-lg border-3">
                    <h2 className="text-center">Create New Item</h2>
                    <Row>
                        <input
                            onChange={handleChange}
                            name="title"
                            value={item.title}
                            className="form-control mt-4"
                            placeholder="item name"
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
                            placeholder="image  (url)"
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
                            placeholder="track  (nutrition / wellness / fitness)"
                            type="text"
                        />
                        <input
                            onChange={handleChange}
                            name="description"
                            value={item.description}
                            className="form-control"
                            placeholder="item description"
                            type="text"
                        />

                        <button
                            onClick={handleSubmit}
                            className="btn btn-outline-success mt-4">
                            Create
                        </button>
                    </Row>
                </form>
            </div>
            </div>
        </div>
    )
}

export default AddItem;