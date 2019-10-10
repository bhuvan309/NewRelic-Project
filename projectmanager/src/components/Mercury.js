import React, { Component } from 'react';
import MercuryItem from './MercuryItem';


class Mercurys extends Component {
  
    render() {
        let mercuryItems;
        if(this.props.mercurys)
        {
            mercuryItems = this.props.mercurys.map(mercury=>{
                return(<MercuryItem key={mercury.temprature} mercury={mercury} />);
            });
        }

        return(  
                <div className="Mercurys">
                {mercuryItems}
                </div>
              );
    }
}

export default Mercurys;
