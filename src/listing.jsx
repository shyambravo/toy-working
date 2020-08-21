import React from 'react';
import Cards from "./cards";
import ReactDOM from 'react-dom';
import Add from "./add";
import {sortr} from "./ob";
function add(){
    ReactDOM.render(<Add />, document.getElementById('root'));
}

function filter(){
    const sal = document.getElementById("myRange").value;
    sortr(sal);
}

function Listing() {
    return <div>
    <h1>Greatest Toy Store</h1>
    <p>This is a collection of the largest and the baddest toys</p>
    <div className='container'>
    <input type ='text' placeholder='what are you loooking for ?' id='filterbyname'/>
    <select id='featured' onChange="{Filter}"><option value='yes'>Yes</option><option value='No'>No</option></select>
    <label className="rating">Rating:</label>
    <input type='range' min='1' max='5' defaultValue='20' className='slider' id='myRange' onChange={filter}></input>
    <label>Filter by Brand</label>
    <br></br>
    <div className="checkbox"><div><input type="checkbox" name="dc" value="dc"  className="checkboxin"></input></div><label>Dc</label></div>
    <div className="checkbox"><div  ><input type="checkbox" name="dc" value="dc"  className="checkboxin"></input></div><label>Marvel</label></div>
    <a className="add" onClick={add}>+Add</a>
    <br></br>
    <br></br>
    <br></br>
    
    <Cards filter="none"/>

   
 
    </div>
    <div className="footer">
    <p className="centerp">Copyright Toy shop © 2019. All Rights Reserved</p>
    </div>
    </div> 
    
   
}

export default Listing;