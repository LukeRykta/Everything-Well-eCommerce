import {Row} from "react-bootstrap";
import '../css/Form.css'

const AddItem = () => {
    return (
        <div className="container mt-5">
            <form className="form">
                <h2 className="text-center">Create New Item</h2>
                <Row>
                    <input className="form-control" placeholder="title" type="text" />
                    <input className="form-control" placeholder="vendor" type="text" />
                    <input className="form-control" placeholder="imgUrl" type="text" />
                    <input className="form-control" placeholder="price" type="text" />
                    <button className="btn btn-outline-success mt-3">Create</button>
                </Row>
            </form>
        </div>
    )
}

export default AddItem;