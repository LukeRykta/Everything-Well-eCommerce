import React, {useEffect, useState} from "react";
import ItemCard from "../../components/ItemCard";
import {getAllItems} from "../../services/itemService";

const FitPage = () => {
    const [items, setItems] = useState([]);
    const relevant_tracks = [];

    items.forEach(function (item){
       if (item.track === "fitness"){
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
        <div className="FitnessBackground">
            <div>
                <div className="py-4" style={{backgroundColor: 'rgba(255,131,100,1)'}}>
                    <div className="text-center">
                        <div className style={{position: "relative"}}>
                            <h2>Fitness</h2>
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

export default FitPage;