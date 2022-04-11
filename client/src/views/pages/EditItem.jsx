import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editItem, getItemById } from "../../services/itemService";

const EditItem = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [item, setItem] = useState({
        title: '',
        vendor: '',
        image: '',
        price: '',
    })

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
        await editItem(item);
        setItem({
            title: '',
            vendor: '',
            image: '',
            price: '',
        });
        navigate("/")
    }

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="form">
                <h2>Edit Item</h2>
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
                    placeholder="imgUrl"
                    type="text"
                />
                <input
                    onChange={handleChange}
                    name="image"
                    value={item.image}
                    className="form-control"
                    placeholder="imgUrl"
                    type="text"
                />
                <input
                    onChange={handleChange}
                    name="price"
                    value={item.price}
                    className="form-control"
                    placeholder="imgUrl"
                    type="text"
                />
                <button>Save Changes</button>
            </form>
        </div>
    )
}

export default EditItem;