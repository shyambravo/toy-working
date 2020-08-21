import React from 'react';
import Featured from "./Featured";
import {delob} from "./ob";

var ob2 = JSON.parse(localStorage.getItem("users") || "[]");



//

function createCard(contact) {
    var key = contact.id;
    return <div className='col-sm-4 card-boot' id={contact.id} >
    <div className='card' ><div className='card-body'>
        <img src={contact.image}></img>
        <a href='' className='btn btn-primary' className="gold">{contact.rating} Stars</a>
        <div id="movecom"><i class="fas fa-heart fa-lg"></i><span>{contact.fav_count}</span></div>
    </div>
    </div>
    <h3 id="brandmove">{contact.brand}</h3>
</div>
}

function Cards(props) {
    
    if(props.filter==="none"){
        return (<div className="row">
            {ob2.map(createCard)}
        </div>
            
        );
        
        /* */
    }else if(props.filter==="featured"){
        return <Featured />
    }
}

export default Cards;