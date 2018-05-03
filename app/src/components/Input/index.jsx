import React from 'react';
import Inputmask from 'inputmask';
import styled from 'styled-components';

const Inputs = styled.div`
  width: 100%;
  float: left;
  margin-bottom: 1rem;
  > input {
    width: 98%;
    height: 1.4rem;
    float: left;
    border: 2px solid;
    &:focus {
      border-color: blue;
      outline: none;
    }
  }
  .active {
    background-color: red;  
  }
  .inative {
    background-color: yellow;
  }
`;

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.setState ={
      inputValue: props.defaultValue || '',
    }
  }

  componentDidMount() {
    const { mask } = this.props;
    Inputmask(mask).mask(this._input);
  }

  render() {
    const { id, mask, className } = this.props;
    // console.log('className no input', className);
    return(
      <Inputs className={className}>
        <input
          type="text" 
          id={id}
          mask={mask}
          onChange={this.props.onChange}
          ref={(c) => (this._input = c)}
          className={className}
        />
      </Inputs>
    );
  }
}

export default Input;