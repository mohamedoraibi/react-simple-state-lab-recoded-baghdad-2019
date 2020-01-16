import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <div className="cell"></div>) 
    render (){
     <div id="root">
  <div id="matrix">
    <div class="row">
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
        ...
    </div>
    <div class="row">
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
        ...
    </div>
  </div>
</div> 
    }
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}