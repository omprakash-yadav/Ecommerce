import React, { Component } from 'react';
class NaveBar extends Component {
   
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
           <a className="navbar-brand" href="#">
           Navbar
           <span className="badge badge-pil badge-danger">{this.props.totalCounters}</span>
           </a>
           </nav>
         );
    }
}
 
export default NaveBar ;