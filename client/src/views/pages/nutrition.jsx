import React, {useEffect, useState} from "react";
import { getAllItems } from "../../services/itemService"
import ItemCard from "../../components/ItemCard";

const NutPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
    }, [])

    async function getItems() {
        const response = await getAllItems();
        setItems(response.data);
    }

    return(

        <div className="container mt-5">
            <h2>Nutrition Page</h2>
            <div className="container">
                <div className="row">
                    {items.map((item) => (
                        <div key={item._id} className="my-3 col-lg-4 col-md-6 col-sm-12">
                            <ItemCard obj={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NutPage;