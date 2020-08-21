import React from 'react';
import {addob} from "./ob";
var ob2 = JSON.parse(localStorage.getItem("users") || "[]");



function Addinfo() {
    const info = {
        "id": null,
        "Name": null,
        "Featured": null,
        "fav_count": null,
        "brand": null,
        "rating": null,
        "image": null,
        "description": null
    };
    info.id = (ob2.length)+1;
    info.Name = document.getElementById("nameinfo").value;
    info.Featured = document.getElementById("featuredinfo").value;
    info.fav_count = document.getElementById("likeinfo").value;
    info.brand = document.getElementById("brandinfo").value;
    info.rating = document.getElementById("ratinginfo").value;
    info.image = document.getElementById("imginfo").value;
    info.description = document.getElementById("desinfo").value;

    addob(info);
    window.location.reload();
    

}


function Info() {
    return <div className="container">
            <div className="infostyle">
                <label className="label">Name</label>
                <input type="text" placeholder="Enter the name" id="nameinfo"/>
            </div>
            <div className="infostyle">
                <label className="label">Featured</label>
                <select id="featuredinfo">
                    <option value="yes">Yes</option>
                    <option vaue="no">No</option>
                </select>
            </div>
            <div className="infostyle">
                <label className="label">Likes</label>
                <input type="number" id="likeinfo" />
            </div>
            <div className="infostyle">
                <label className="label">Brand</label>
                <select id="brandinfo">
                    <option value="MARVEL">MARVEL</option>
                    <option vaue="DC">DC</option>
                </select>
            </div>
            <div className="infostyle">
                <label className="label">Rating</label>
                <input type="number" id="ratinginfo" />
            </div>
            <div className="infostyle">
                <label className="label">ImageURL</label>
                <input type="text" placeholder="Enter the URL" id="imginfo"/>
            </div>
            <div className="infostyle1">
                <label className="label">Description</label>
                <textarea rows="10" cols="50"  id="desinfo"/>
            </div>

            <div className="Add">
            <button type="button" className="btn btn-secondary" id="addinfo" onClick={Addinfo}>ADD</button>

            </div>
            
           
        
    </div>
   
}


export default Info;