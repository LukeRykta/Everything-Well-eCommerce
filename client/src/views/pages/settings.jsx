import { Row } from "react-bootstrap";
import '../css/Form.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../services/itemService";

const Settings = () => {
    const [coup, setCoup] = useState({
        key: '',
        percent: ''
    });


    const handleChange = (event) => {
        setCoup({
            ...coup,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(coup);
        setCoup({
            key: '',
            percent: ''
        });

        window.location.reload()
        window.alert("Coupon created")
    }

    return (
        <div className="FitBackground">
            <div style={{paddingTop: "2%"}}>
                <form className="form mt-5 bg-light shadow-lg border-3">
                    <h2 className="text-center">Create New Coupon</h2>
                    <Row>

                        <input
                            onChange={handleChange}
                            name="key"
                            value={coup.key}
                            className="form-control mt-4"
                            placeholder="coupon key"
                            type="text"
                        />

                        <input
                            onChange={handleChange}
                            name="percent"
                            value={coup.percent}
                            className="form-control mt-4"
                            placeholder="discount percentage"
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

export default Settings;