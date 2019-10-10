import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


class Course extends React.Component {
 
  render() {
    let courses = [
      { id: 1, name: 'Java' },
      { id: 2, name: 'React' },
      { id: 3, name: 'Angular'},
    ];

    var rowdata=[]
    for(let i=0;i<courses.length;i++){
      var row = (<tr key={Math.random()}>
        <td>{courses[i].id}</td><td> {courses[i].name}</td>
      </tr>)
      rowdata.push(row);
        }
    return (
      <div>
        <h3>React Tutorial</h3>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
        {rowdata}
        </tbody>
        </Table>  
        </div>
    )
  }
}

export default Course;
