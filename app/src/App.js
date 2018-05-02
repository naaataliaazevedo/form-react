import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Input from './components/Input';
import Checkbox from './components/Checkbox';

const ContainerInput = styled.div`
  @media (max-width: 600px) {
    width: 80%;
    margin: 0 auto;
  }
  width: 60%;
  margin: 0 auto;
`;

const BoxInput = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    float: left;
  }
  @media (min-width: 601px) {
    width: calc((100% / 3) - 2rem);
    padding: 0rem 1rem;
    float: left;
    &:nth-of-type(1n) {
      &:after {
        content: "-";
        position: absolute;
        top: 20.5rem;
        left: 39.7%;
      }
    }
    &:nth-of-type(2n) {
      &:after {
        left: 59.7%;
      }
    }
  }
`;

const LabelInput = styled.label`
  width: 100%;
  float: left;
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
`;

const BoxCheckboxes = styled.div`
  width: 100%;
  float: left;
`;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // inputValue: '',
    };
  }

  handleChange = (ev) => {
    this.setState({
      inputValue: ev.target.value,
    });
  };

  handleSubmit(event) {
    // const data = this.state;
    console.log('event', event);
    const valueTarget = event.target[0].value;
    event.preventDefault();
    console.log('ev', valueTarget, event.target[0].id);
    /*Object.values(data)[0].map((value) => {
      return value.name === valueTarget ?
      this.setState(prevState => ({
        inputsValues: prevState.inputsValues.concat(valueTarget)
      }))
      : ''; 
    });*/
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Dados pessoais</h1>
        <form onSubmit={this.handleSubmit}> 
          <ContainerInput>
            <BoxInput>
              <LabelInput>Número do Rg:</LabelInput>
              <Input id={'rg'} mask="99.999.999-9" /*defaultValue={this.state.inputValue}*/ /*onChange={this.handleChange}*/ />
            </BoxInput>
            <BoxInput>
              <LabelInput>Data de emissão:</LabelInput>
              <Input id={'data'} mask="99/99/9999" /*defaultValue={this.state.inputValue}*/ /*onChange={this.handleChange}*/ />
            </BoxInput>
            <BoxInput>
              <LabelInput>Orgão expedidor</LabelInput>
              <Input />
            </BoxInput>

            <BoxCheckboxes>
              <label>Sexo</label>
              <Checkbox value={'feminino'}>{'Feminino'}</Checkbox>
              <Checkbox value={'masculino'}>{'Masculino'}</Checkbox>
            </BoxCheckboxes>
            <button type="submit">Continuar</button>
          </ContainerInput>
        </form>
      </div>
    );
  }
}

export default App;
