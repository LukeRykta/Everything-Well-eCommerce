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
        price: ""
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
        navigate('/nutrition')
        setItem({
            title: '',
            author: '',
            image: '',
            price: '',
        });
        window.location.reload()
    }

    return (
        <div className="FitBackground">
            <div className="container mt-5">
                <form className="form mt-5 bg-light shadow-lg border-3">
                    <h2 className="text-center">Create New Item</h2>
                    <Row>
                        <input
                            name="title"
                            onChange={handleChange}
                            value={item.title}
                            className="form-control mt-4"
                            placeholder="item name"
                            type="text"
                        />
                        <input
                            name="vendor"
                            onChange={handleChange}
                            value={item.vendor}
                            className="form-control"
                            placeholder="vendor"
                            type="text"
                        />
                        <input
                            name="image"
                            onChange={handleChange}
                            value={item.image}
                            className="form-control"
                            placeholder="image (url)"
                            type="text"
                        />
                        <input
                            name="price"
                            onChange={handleChange}
                            value={item.price}
                            className="form-control"
                            placeholder="price"
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
    )
}

export default AddItem;