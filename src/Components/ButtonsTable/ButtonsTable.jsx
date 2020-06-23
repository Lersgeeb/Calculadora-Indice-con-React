import React from 'react';
import './ButtonsTable.css';
import {Row,Col} from 'react-bootstrap';


function ButtonsTable({rowCount,subtractRowCount,addRowCount,editRowCount}) {
  return (
    <div className="ButtonsTable">
        <Row noGutters>
            <Col xs={4} ><div className="addRemRow" size={'sm'} onClick={subtractRowCount} variant="warning">-</div>{''}</Col>
            <Col xs={4} ><input  type="text" disabled onChange={editRowCount} value={rowCount} /></Col>
            <Col xs={4} ><div className="addRemRow" size={'sm'} onClick={addRowCount} variant="warning">+</div>{''}</Col>
        </Row>
    </div>
  );
}

export default ButtonsTable;
