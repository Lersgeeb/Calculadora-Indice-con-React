import React from 'react';
import './App.css';
//import {Table} from 'react-bootstrap';
import TableSection from './Components/TableSection/TableSection.jsx'
import PrincipalSection from './Components/PrincipalSection/PrincipalSection.jsx'



class App extends React.Component{
  constructor(){
    super();
    this.tableSection = React.createRef('')
  }

  handleFiles = (files) => {
    const reader = new FileReader();
    const scope = this.tableSection.current;

    reader.onload = function(e) {
      const rows = reader.result.split('\n');
      const notes = rows.map( row =>{
        const noteTSV = row.split('\t');
        if(noteTSV.length > 3)
          return {name:noteTSV[1], uv:(parseInt(noteTSV[2])), prom:noteTSV[6]}
        else
          return {name:noteTSV[0], uv:(parseInt(noteTSV[1])), prom:noteTSV[2]}
      });

      scope.rowOfImportTSV(notes)
    }
    reader.readAsText(files[0]);
  }

  getTableRef = () => {
    return this.tableSection;
  }

  render(){

    return (
      
      <div className="app">
        <div className="inputSectionlayer1">
          <div className="inputSectionlayer2">
              <div className="verticalLine left1"></div>
              <div className="verticalLine left2"></div>
              <div className="verticalLine left3"></div>
            <div className="inputSectionlayer3">
              <PrincipalSection getTableRef={this.getTableRef} handleFiles={this.handleFiles}></PrincipalSection>
            </div>
          </div>
        </div>
  
        <div className = "secondarySection ">
          <TableSection ref={this.tableSection}></TableSection>
        </div>
  
      </div>
    );
  }
  
}

export default App;
