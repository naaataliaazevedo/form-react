import React from 'react';
import styled from 'styled-components';
// http://jsfiddle.net/zAFND/6/

const ContainerCheckbox = styled.div`
  margin: 4px;
  border: 2px solid #000;
  // overflow: auto;
  float: left;
  width: 32.6%;
  &:hover {
    margin: 4px;
    border: 1px solid blue;
    // overflow: auto;
    float: left;
    color: blue;
  }
  label {
    float: left;
    width: 100%;
  }
  label span {
    text-align: center;
    padding: 3px 0px;
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
  }
  label input {
    position: absolute;
    top: -20px;
  }
  > input:checked + span {
    background-color: blue;
    color: #fff;
  }
`;
export class CheckBox extends React.Component {
  render() {
    return(
      <ContainerCheckbox>
        <label>
          <input
            type="checkbox"
            value={this.props.value}
          />
          <span>{this.props.children}</span>
        </label>
      </ContainerCheckbox>
    );
  }
}

export default CheckBox;