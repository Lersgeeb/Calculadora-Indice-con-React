import React from 'react';
import './ButtonPrincipal.css';
import { faCalculator, faFileImport,faDownload,faInfo,faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactFileReader from 'react-file-reader';
import Modal from 'react-bootstrap/Modal';
import githubLogo from  '../../icon/github.png';


class ButtonPrincipal extends React.Component {
  constructor(){
    super();
    this.state = {
      show:false,
    }
  }  

  render(){
    const {handleFiles,getTableRef} =this.props

    const scope = getTableRef();
   
    const calculate = () => {
      scope.current.calculateProm(true);
    }

    const download = () => {
      scope.current.downloadTSV();
    }

    const handleClose = () => this.setState({show:false});
    const handleShow = () => this.setState({show:true});
  

    return (
      <div className="buttonsPrincipal">
        <div className="normalWidth">
          <div onClick={calculate} className="ButtonPrincipalClass">
              <FontAwesomeIcon fixedWidth  className="icon" icon={faCalculator} />
              <div className="textButton">
                Calcular
              </div> 
          </div>
          <div className="inputFile">
            <ReactFileReader className="" handleFiles={handleFiles} fileTypes={'.tsv'}>
              <div className="ButtonPrincipalClass">

                  <FontAwesomeIcon fixedWidth  className="icon"  icon={faFileImport} />
                  <div className="textButton">
                    Importar TSV
                  </div> 
              </div>
            </ReactFileReader>
          </div>
    
          <div onClick={download} className="ButtonPrincipalClass">
              <FontAwesomeIcon fixedWidth  className="icon" icon={faDownload} />
              <div className="textButton">
                 Descargar TSV
              </div> 
          </div>

          <div className="ButtonPrincipalClass"  onClick={handleShow}>
              <FontAwesomeIcon fixedWidth  className="icon" icon={faInfo} />
              <div className="textButton">
                 Información
              </div> 
          </div>
        </div>
        
        <div className="lesswidth">
          
          <div onClick={calculate} className="ButtonPrincipalClass">
              <FontAwesomeIcon fixedWidth  className="icon" icon={faCalculator} />
          </div>
          <div className="inputFile">
            <ReactFileReader className="" handleFiles={handleFiles} fileTypes={'.tsv'}>
              <div className="ButtonPrincipalClass">

                  <FontAwesomeIcon fixedWidth  className="icon"  icon={faFileImport} />
                  
              </div>
            </ReactFileReader>
          </div>
    
          <div onClick={download} className="ButtonPrincipalClass">
              <FontAwesomeIcon fixedWidth  className="icon" icon={faDownload} />    
          </div>

          <div className="ButtonPrincipalClass" onClick={handleShow}>
              <FontAwesomeIcon fixedWidth  className="icon" icon={faInfo} />
          </div>

        </div>

        <Modal show={this.state.show} onHide={handleClose}>
        <Modal.Header closeButton className="modalInfo">
          <Modal.Title className="titleModalInfo">Información</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modalInfo">
          <div className="infoContainer">
            <div className="logoContainer">
              <img src={githubLogo} alt="logo_Github"/>
            </div>
            <div class="valueContainer">www.github.com/Lersgeeb</div>
          </div>

          <div className="infoContainer">
            <div className="logoContainer">
              <FontAwesomeIcon fixedWidth  className="icon" icon={faUser} />
            </div>
            <div class="valueContainer">Gabriel Escobar Banegas</div>
          </div>
          

          
        </Modal.Body>
      </Modal>

      </div>
    );
  }
}

export default ButtonPrincipal;
