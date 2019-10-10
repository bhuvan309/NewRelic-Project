import React, { Component } from 'react';


class ProjectItem extends Component {
  render() {
    return (
       <div>
          
      <li className="Projects w3-card-4 w3-green ">
        {this.props.project.title} - {this.props.project.category}
      
      </li>
      
     </div>
      
    );
  }
}

export default ProjectItem;
