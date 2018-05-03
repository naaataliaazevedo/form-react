import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import Header from './components/Header';

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

const LabelCheckbox = styled.label`
  width: auto;
  float: left;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  padding: 0.6rem 0;
`;

const BoxCheckboxes = styled.div`
  width: 80%;
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
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      valueStateRg: '',
      valueStateData: '',
    };
  }
  
  handleChange = (event) => {
    const { valueStateRg, valueStateData } = this.state;
    const valueTarget = event.target.value;
    console.log(event.target.value);
  
    this.setState({
      valueStateRg: valueTarget,
      valueStateData: valueTarget
    });
  }
  
  onClick = (event) => {
    const valueTarget = event.target.value;
    console.log('event', event.target);
    event.preventDefault();
    console.log("event", event.target.value);
      
    this.setState({ 
      value: valueTarget
    });
  }

  handleSubmit(event) {
    // const { valueStateRg, valueStateData } = this.state;
    // const data = this.state;
    // const valueRg = event.target[0].value;
    // const valueData = event.target[1].value;
    event.preventDefault();
    console.log('submit');
    //console.log('ev', valueStateRg, valueStateData);
    
    /*Object.values(data)[0].map((value) => {
      return value.name === valueTarget ?
      this.setState(prevState => ({
        inputsValues: prevState.inputsValues.concat(valueTarget)
      }))
      : ''; 
    });*/
  }

  render() {
    const { value, valueStateRg, valueStateData } = this.state;
    console.log("value", value, valueStateRg, valueStateData);
    const enabled = value !== '' && valueStateRg !== '' && valueStateData !== '';
    return (
      <div className="App">
       {/* <Header />*/}
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
              <Input />
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
