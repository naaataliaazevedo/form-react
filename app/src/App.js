import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Select from './components/Select';

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 26px;
`;

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
        top: 10.5rem;
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

const LabelCheckbox = styled.label`
  width: auto;
  float: left;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  padding: 0.6rem 0;
`;

const BoxCheckboxes = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const BoxButtonSubmit = styled.div`
  width: 100%;
  float: left;
  margin: 1rem 0;
`;

const ButtonSubmit = styled.button`
  height: 2.1rem;
  width: 10rem;
  background-color: #73e878;
  border: none;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  &:disabled {
    background-color: #dfdfdf
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      value: '',
      valueStateRg: '',
      valueStateData: '',
      valueStateEmissor: ''
    };
  }
  
  handleChange = (event) => {
    const valueTarget = event.target.value;

    this.setState({
      valueStateRg: valueTarget,
      valueStateData: valueTarget,
      valueStateEmissor: valueTarget
    });
  }
  
  onClick = (event) => {
    const valueTarget = event.target.value;
    event.preventDefault();
      
    this.setState({ 
      value: valueTarget
    });
  }

  handleSubmit(event) {
    // const { valueStateRg, valueStateData, valueStateEmissor, value } = this.state;
    // console.log('valores', value, valueStateRg, valueStateData, valueStateEmissor);

    event.preventDefault();
    console.log('submit');
  }

  render() {
    const { value, valueStateRg, valueStateData, valueStateEmissor } = this.state;
    const enabled = value !== '' && valueStateRg !== '' && valueStateData !== '' && valueStateEmissor !== '';
    return (
      <div className="App">
        <Header />
        <Title>Dados pessoais</Title>
        <form onSubmit={this.handleSubmit}>
          <ContainerInput>
            <BoxInput>
              <LabelInput>Número do Rg:</LabelInput>
              <Input
                id={"rg"}
                mask="99.999.999-9" 
                onChange={this.handleChange}
                className={valueStateRg !== '' ? 'active' : ''}
              />
            </BoxInput>
            <BoxInput>
              <LabelInput>Data de emissão:</LabelInput>
              <Input
                id={"data"}
                mask="99/99/9999" 
                onChange={this.handleChange}
              />
            </BoxInput>
            <BoxInput>
              <LabelInput>Orgão expedidor</LabelInput>
              <Select onChange={this.handleChange}/>
            </BoxInput>

            <BoxCheckboxes>
              <LabelCheckbox>Sexo</LabelCheckbox>
              <Checkbox
                value="feminino"
                name={"feminino"}
                onClick={event => this.onClick(event)}
                className={value === 'feminino' ? 'active' : 'inative'}
              >
                {"Feminino"}
              </Checkbox>
              <Checkbox 
                value={"masculino"} 
                name={"masculino"}
                onClick={event => this.onClick(event)}
                className={value === 'masculino' ? 'active' : 'inative'} 
              >
                {"Masculino"}
              </Checkbox>
            </BoxCheckboxes>

            <BoxButtonSubmit>
              <ButtonSubmit disabled={!enabled} type="submit">Continuar</ButtonSubmit>
            </BoxButtonSubmit>
          </ContainerInput>
        </form>
      </div>
    );
  }
}

export default App;
