import React, { Fragment } from 'react';
import {Table} from 'react-bootstrap';
import './TableComp.css';

function TableComp({onChangeRow,notes}) {
  
  const rows = notes.map((note, i) =>{
    return (
      <tr key={i}>
        <td>{i+1}</td>
        <td onChange={(e) => onChangeRow(i,e.target.value,"name")}><input type="text" defaultValue={note.name} width="50%"/></td>
        <td onChange={(e) => onChangeRow(i,e.target.value,"uv")}><input type="number"   defaultValue={note.uv} /></td>
        <td onChange={(e) => onChangeRow(i,e.target.value,"prom")}><input type="number" defaultValue={note.prom} /></td>
      </tr>
    );
  })
  
  return (
    <Fragment>
      <div style={{overflowY: 'auto',  height:'561px'}} className="scroll">
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>#</th>
              <th width="50%">Asignatura</th>
              <th>UV</th>
              <th>Promedio</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}

export default TableComp;
