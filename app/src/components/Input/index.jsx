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
    
  onChange = (ev) => {
    const { onChange } = this.props;
    console.log('ev no input', ev.target);

    this.setState({
      inputValue: ev.target.value,
    });

    if (typeof onChange === 'function') {
      onChange(ev.target.value);
    }
  };

  render() {
    //const { inputValue } = this.state;
    const { id, mask } = this.props;
    return(
      <Inputs>
        <input
          type="text" 
          id={id}
          mask={mask}
          //value={inputValue}
          // onChange={this.onChange}
          ref={(c) => (this._input = c)}
          //onKeyPress={this.handleEnterKeyPress}
        />
      </Inputs>
    );
  }
}

export default Input;