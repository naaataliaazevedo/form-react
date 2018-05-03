import React from 'react';
import styled from 'styled-components';
// http://jsfiddle.net/zAFND/6/

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
        top: 23.5rem;
        left: 44.9%;
      }
    }
  }
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
    background-color: #fff;
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
  onChange = (ev) => {
    const { onChange } = this.props;

    if (typeof onChange === 'function') {
      onChange(ev);
    }
  };

  render() {
    const { checked, name, value } = this.props;
    return(
      <ContainerCheckbox>
        <label>
          <input
            type="checkbox"
            name={name}
            value={value}
            onchange={this.onChange}
            checked={checked}
          />
          <span>{this.props.children}</span>
        </label>
      </ContainerCheckbox>
    );
  }
}

export default CheckBox;