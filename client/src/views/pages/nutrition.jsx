import React, {useEffect, useState} from "react";
import { getAllItems } from "../../services/itemService"
import ItemCard from "../../components/ItemCard";

const NutPage = () => {
    const banner = "This is a test page with item cards that can be reused in other pages. " +
                   "Each card has a btn that redirects to the itemDetails screen which imports " +
                   "the parameters we use for each unique item.";
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
    }, [])

    async function getItems() {
        const response = await getAllItems();
        setItems(response.data);
    }

    return(

        <div className="RepeatingBackground">
            <div className="container mt-5">
                <div className="px-5 py-2 form-label bg-light itemCard">
                    <h2>Nutrition Page</h2>
                <p className="blockquote">{banner}</p>
                </div>
                <div className="container">
                    <div className="row">
                        {items.map((item) => (
                            <div key={item._id} className="px-5 my-3 col-lg-4 col-md-6 col-sm-12">
                                <ItemCard obj={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NutPage;