import {Row} from "react-bootstrap";
import '../css/Form.css'
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddItem = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [item, setItem] = useState({
        title: "",
        vendor: "",
        image: "",
        price: ""
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setItem({
            ...item,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(item);
        const response = await axios.post(`${apiUrl}/items/item`, item);
        navigate('/nutrition')
    }

    return (
        <div className="container mt-5">
            <form className="form">
                <h2 className="text-center">Create New Item</h2>
                <Row>
                    <input
                        name="title"
                        onChange={handleChange}
                        value={item.title}
                        className="form-control"
                        placeholder="title"
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
                        className="btn btn-outline-success mt-3">
                        Create
                    </button>
                </Row>
            </form>
        </div>
    )
}

export default AddItem;