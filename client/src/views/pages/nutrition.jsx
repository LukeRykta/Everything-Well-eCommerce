import React, {useEffect, useState} from "react";
import { getAllItems } from "../../services/itemService"
import ItemCard from "../../components/ItemCard";

const NutPage = () => {
    const [items, setItems] = useState([]);
    const relevant_tracks = [];
    const [search, setSearch] = useState({
        key: ''
    })

    items.forEach(function (item){
       if ((item.track === "nutrition")){
           relevant_tracks.push(item);
       }
    });

    const handleChange = (event) => {
        setSearch({
            ...search,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submit reached");
        console.log(search.key);
        console.log(relevant_tracks.pop());

        relevant_tracks.forEach(function (relevant_track){
            if ((relevant_track.track === "nutrition") && (relevant_track.name === search.key)){
                relevant_tracks.push(relevant_track);
            }
        });
    }

    useEffect(() => {
        getItems();
    }, [])

    async function getItems() {
        const response = await getAllItems();
        setItems(response.data);
    }

    return(
        <div className="NutritionBackground">
            <div>
                <div className="py-4" style={{backgroundColor: 'rgba(198,232,114,1'}}>
                    <div className="text-center">
                        <div className style={{position: "relative"}}>
                        <h2>Nutrition</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label style={{width: "67%"}}>
                                <input
                                    className="form-control"
                                    onChange={handleChange}
                                    name="key"
                                    value={search.key}
                                    type="text"
                                    placeholder="search"
                                />
                            </label>
                        </form>
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

export default NutPage;