import React from 'react';
import PropTypes from 'prop-types';
import './Jumbo.scss'



function Jumbo(props){
  const hasSubTitle = () =>{
    return props.subTitle || props.info
  }
  return(
    <div id='jumbo'>
      <div className={`header col ${props.className}`}>
        <h1>{props.title}</h1>
      </div>
      {hasSubTitle() ?
        <div className="sub col">
            <div>
              <h2>{props.subTitle}</h2>
              <p>{props.info}</p>
            </div>
        </div>
        : <></>
      }
    </div>
  )
}

Jumbo.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  info: PropTypes.string,
  className: PropTypes.string
};

export default Jumbo;
