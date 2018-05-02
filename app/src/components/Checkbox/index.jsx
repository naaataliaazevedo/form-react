import React from 'react';
import styled from 'styled-components';
// http://jsfiddle.net/zAFND/6/

const ContainerCheckbox = styled.div`
  margin: 4px;
  background-color: #efefef;
  border-radius: 4px;
  border: 1px solid #d0d0d0;
  // overflow: auto;
  float: left;
  width: 48%;
  &:hover {
    margin: 4px;
    background-color: #efefef;
    border-radius: 4px;
    border: 1px solid red;
    // overflow: auto;
    float: left;
    color: red;
  }
  label {
    float: left;
    width: 100%;
  }
  label span {
    text-align: center;
    padding: 3px 0px;
    display: block;
  }
  label input {
    position: absolute;
    top: -20px;
  }
  > input:checked + span {
    background-color: #911;
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