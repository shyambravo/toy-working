import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import Add from "./add";
// import Delete from "./delete";
// import Edit from "./edit";

function app(){
  ReactDOM.render(<App />, document.getElementById('root'));
}
function add(){
  ReactDOM.render(<Add />, document.getElementById('root'));
}

// function del() {
//   ReactDOM.render(<Delete />, document.getElementById('root'));
// }
// function edit(){
//   ReactDOM.render(<Edit />, document.getElementById('root'));
// }

function Nav() {
    return <div id="">
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="boot-nav">
    <a className="navbar-brand" href="#">Toy Store</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" onClick={app}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={add}>Add Toys</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" onClick={edit}>Edit Toys</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" onClick={del}>Delete Toys</a>
        </li> */}
       
      </ul>
    </div>
  </nav>
    </div>
}


export default Nav;