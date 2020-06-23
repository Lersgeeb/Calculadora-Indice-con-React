import React from 'react';
import './PrincipalSection.css';
import ButtonPrincipal from '../ButtonPrincipal/ButtonPrincipal.jsx';
import {Col, Row} from 'react-bootstrap';

class PrincipalSection extends React.Component{

  render(){
    const {handleFiles,getTableRef} = this.props;
    return ( 
      <div className="PrincipalSectionClass">
        <div className="headerPrincipal">
          <h2 className="TitlePrincipal">Calculadora Indice</h2>
          <div className="lines">
            <Row>
              <Col md={'12'}><div className="line"></div></Col>  
              <Col md={'6'}><div className="line"></div></Col>  
              <Col md={'3'}><div className="line"></div></Col>  
              <Col md={'3'}><div className="line"></div></Col>  
            </Row>
          </div>
        </div>
  
        <div className="buttonSection mt-4">
          <ButtonPrincipal getTableRef={getTableRef} handleFiles={handleFiles}></ButtonPrincipal>
        </div>
      </div>
    );
  }
}

export default PrincipalSection;
