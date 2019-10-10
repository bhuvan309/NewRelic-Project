import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  
    render() {
        let projectItems;
        if(this.props.projects){
            projectItems = this.props.projects.map(project=>{
            
            return(<ProjectItem key={project.title} project={project} />)
            });
            
            }
    return (
      <div className="Projects">
       <span  className="Projects w3-card-4 w3-tag w3-xlarge w3-padding w3-red tilt"  > List of Projects </span> 
      {projectItems}
      
      </div>
    );
  }
}

export default Projects;
