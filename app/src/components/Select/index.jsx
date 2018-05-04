import React from 'react';
import styled from 'styled-components';

const SelectItens = styled.select`
  width: 100%;
  float: left;
  margin-bottom: 1rem;
  width: 98%;
  height: 1.8rem;
  float: left;
	border: 2px solid;
	background-color: #fff;
  &:focus {
    border-color: blue;
    outline: none;
  }
  .active {
    background-color: red;
  }
  .inative {
    background-color: yellow;
  }
`;

export class Select extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('/orgao_emissor.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.orgao_emissor,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <SelectItens onChange={this.props.onChange}>
        {data.map((value) => {
          	return (
            	<option key={value.value} value={value.value}>{value.label}</option>
          	);
        	})
      	}
    	</SelectItens>
    );
  }
}

export default Select;
