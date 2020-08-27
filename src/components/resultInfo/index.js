import React, { Component } from 'react';
import './resultInfo.css';

class ResultInfo extends Component {

  render() {
    const { resultInfo } = this.props;
    let arr = [];

    Object.keys(resultInfo).map(function(keyName, keyIndex) {
      if (keyName !== 'id' && keyName !== 'matching_terms') {
         if (keyName === 'category') {
          arr.unshift(
            <h2 key={keyIndex}> {resultInfo[keyName]}</h2>
          );
        } else {
          let resultInfoValue = resultInfo[keyName];
          if (Array.isArray(resultInfoValue)) {
            resultInfoValue = resultInfoValue.join(', ');
          }

          if (keyName === 'date' || keyName === 'last_contact' || keyName === 'created' || keyName === 'timestamp') {
            let date = new Date(resultInfoValue);

            date = date.toISOString().substring(0, 10);
            const dateArr = date.split('-');
            resultInfoValue = dateArr[1] + '/' + dateArr[2] + '/' + dateArr[0];
          }
          
          arr.push(
            <div key={keyIndex}>
              <b className="itemRow">{keyName}:&nbsp;&nbsp;</b> 
              <p className="itemRow">{resultInfoValue}</p>
            </div>
          );
        }
      }
      return null;
    })

    return (
      <div className="resultInfoContainer">
        {arr}
      </div>
    );
  }
}

export default ResultInfo;