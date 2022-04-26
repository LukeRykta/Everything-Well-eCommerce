import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getAllItems} from "../../services/itemService";
import ItemCard from "../../components/ItemCard";

const WellPage = () => {
    const banner = "Welcome to the Wellness Page";
    const [items, setItems] = useState([]);
    const relevant_tracks = [];

    items.forEach(function (item){
       if (item.track === "wellness"){
           relevant_tracks.push(item);
       }
    });

    useEffect(() => {
        getItems();
    }, [])

    async function getItems() {
        const response = await getAllItems();
        setItems(response.data);
    }

    return(
        <div className="NutritionBackground">
            <div className="container mt-5">
                <div className="px-5 py-2 form-label itemCard" style={{backgroundColor: 'rgba(198,232,114,1'}}>
                    <h2>Wellness Page</h2>
                    <p className="blockquote">{banner}</p>
                </div>
                <div className="container">
                    <div className="row">
                        {relevant_tracks.map((item) => (
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

export default WellPage;