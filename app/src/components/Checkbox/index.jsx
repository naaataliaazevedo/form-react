import React from 'react';
import styled from 'styled-components';

const ContainerCheckbox = styled.div`
  margin: 4px;
  border: 2px solid #000;
  // overflow: auto;
  float: left;
  width: 32.6%;
  @media (min-width: 601px) {
    &:nth-of-type(1n) {
      &:after {
        content: "-";
        position: absolute;
        top: 13.3rem;
        left: 47.1%;
      }
    }
  }
  &:hover {
    margin: 4px;
    border: 2px solid blue;
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
    background-color: #fff;
  }
  .active {
    background-color: #1b7d8e;
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
    const { checked, name, value, className } = this.props;
    console.log('className checkbox', className);
    return(
      <ContainerCheckbox>
        <label>
          <input
            type="checkbox"
            name={name}
            value={value}
            checked={checked}
            onClick={this.props.onClick}
          />
          <span className={className}>{this.props.children}</span>
        </label>
      </ContainerCheckbox>
    );
  }
}

export default CheckBox;