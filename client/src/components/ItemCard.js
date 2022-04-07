import { Card } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './ItemCard.css';

const ItemCard = ({ obj }) => {
    return (
        <Card className ="itemCard" style={{ width: '18rem' }}>
            <img src={obj.image} />
            <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text>{obj.vendor}</Card.Text>
                <Link className="btn btn-outline-dark" to={`/item/${obj._id}`}>
                    View More
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ItemCard;