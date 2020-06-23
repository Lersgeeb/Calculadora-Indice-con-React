import React from 'react';
import './TableSection.css';
import TableComp from '../TableComp/TableComp.jsx'
import ButtonsTable from '../ButtonsTable/ButtonsTable.jsx'
import TextHeaders from '../TextHeaders/TextHeaders.jsx'
import {Row,Col} from 'react-bootstrap';

class TableSection extends React.Component{
  
  constructor(){
    super();
    this.state = {
      notes:[{name:"", uv:"", prom:""},],
      prom:0,
      showProm:null,
    }
  }
  editRowCount = () =>{
    console.log('editing table');
  }

  addRowCount = () =>{
    let notes = this.state.notes;
    notes.push({name:"", uv:"", prom:""});
    this.setState({
      notes: notes,
    });
  }

  subtractRowCount = () => {
   
    let notes = this.state.notes;
    notes.splice(-1,1)
    this.setState({
      notes: notes,
    });
  }

  calculateProm = (showProm) => {
    const notes = this.state.notes;
    const noteTotal = notes.map((note) => {
      if(note.uv !== "" && note.prom !== "" &&  note.uv >= 0 &&  note.prom >= 0){
        return parseInt(note.uv) * parseInt(note.prom);
      }
      else
        return 0
    }).reduce((a,b) => a+b,0)

    const uvTotal = notes.map((note) => {
      if(note.uv !== "" && note.prom !== "" &&  note.uv >= 0 &&  note.prom >= 0)
        return parseInt(note.uv);
      else
        return 0
    }).reduce((a,b) => a+b,0)

    const prom = noteTotal/uvTotal
    if(prom){
      this.setState({
        prom:prom,
      });
    }
    if(showProm){
      this.setState({
        showProm:true,
      });
    }
  }

  onChangeRow = (index,value, input) => {
    const notes = this.state.notes;
    notes[index][input] = value;

    this.setState({
      notes: notes,
      showProm:false,
    });
    this.calculateProm();
  }

  rowOfImportTSV = (noteList) => {
    this.setState({
      notes:[],
    });
    this.setState({
      notes:noteList,
    });
  }

  downloadTSV = () => {
    
    const notesTSV = this.state.notes.map(note => {
      return [note.name, note.uv, note.prom].join('\t');
    }).join('\n');
    
    var data = new Blob([notesTSV], {type: 'text/plain'});
    var tsvURL = window.URL.createObjectURL(data);
    const tempLink = document.createElement('a');
    tempLink.href = tsvURL;
    tempLink.setAttribute('download', 'notes.tsv');
    tempLink.click();
  }

  render(){
    const promComp = (prom) => {
       return <div>Tu Promedio es: {prom.toFixed(2)}%</div>;
    }

    return (
      <div className="tableSectionClass">
        <div className="tableSectionHeader">
          <Row noGutters>
            <Col lg={'8'} xs={'12'}><TextHeaders></TextHeaders></Col>
            <Col lg={'4'} xs={'12'}>
              <ButtonsTable 
                addRowCount={this.addRowCount} 
                subtractRowCount={this.subtractRowCount} 
                rowCount={this.state.notes.length}
                editRowCount={this.editRowCount}>
              </ButtonsTable>
            </Col>
          </Row>
        </div>
        <TableComp className="tableComp" notes={this.state.notes} onChangeRow={this.onChangeRow} ></TableComp>
        <div className="note">
          {(this.state.showProm)?promComp(this.state.prom):null}
        </div>

      </div>
    );
  } 
}

export default TableSection;
