import React, {useEffect, useState} from "react";
import {getAllItems} from "../../services/itemService";
import ItemCard from "../../components/ItemCard";

const WellPage = () => {
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
        <div className="WellnessBackground">
            <div>
                <div className="py-4" style={{backgroundColor: 'rgba(119,82,158,1)'}}>
                    <div className="text-center">
                        <div className style={{position: "relative"}}>
                            <h2><span style={{fontWeight: "lighter" ,color: "white"}}>Wellness</span></h2>
                        </div>
                        <label style={{width: "67%"}}>
                            <input
                                className="form-control"
                                placeholder="search"
                            />
                        </label>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-3">
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