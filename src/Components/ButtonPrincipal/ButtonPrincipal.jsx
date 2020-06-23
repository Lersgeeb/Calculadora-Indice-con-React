import React from 'react';
import './ButtonPrincipal.css';
import { faCalculator, faFileImport,faDownload,faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactFileReader from 'react-file-reader';


class ButtonPrincipal extends React.Component {
    
  render(){
    const {handleFiles,getTableRef} =this.props

    const scope = getTableRef();
    const calculate = () => {
      scope.current.calculateProm(true);
    }

    const download = () => {
      scope.current.downloadTSV();
    }

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

          <div className="ButtonPrincipalClass">
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

          <div className="ButtonPrincipalClass">
              <FontAwesomeIcon fixedWidth  className="icon" icon={faInfo} />
             
          </div>
        </div>

      </div>
    );
  }
}

export default ButtonPrincipal;
