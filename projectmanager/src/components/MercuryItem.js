import React, { Component } from 'react';


class MercuryItem extends Component {
  render() {
    return (
       <div>
          
      <li className="Mercurys w3-card-4 w3-green ">
      {this.props.mercury.temprature} - {this.props.mercury.category}
      
      </li>
      
     </div>
      
    );
  }
}

export default MercuryItem;
