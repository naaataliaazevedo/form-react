import React from 'react';
import styled from 'styled-components';

const orgao = [
  {
    orgao_emissor: [
      { value: "", label: "Selecione" },
      { value: "SSP", label: "Secretaria de Segurança Pública" },
      { value: "PM", label: "Polícia Militar" },
      { value: "PC", label: "Policia Civil" },
      { value: "CNT", label: "Carteira Nacional de Habilitação" },
      { value: "DIC", label: "Diretoria de Identificação Civil" },
      { value: "CTPS", label: "Carteira de Trabaho e Previdência Social" },
      { value: "FGTS", label: "Fundo de Garantia do Tempo de Serviço" },
      { value: "IFP", label: "Instituto Félix Pacheco" },
      { value: "IPF", label: "Instituto Pereira Faustino" },
      { value: "IML", label: "Instituto Médico-Legal" },
      { value: "MTE", label: "Ministério do Trabalho e Emprego" },
      { value: "MMA", label: "Ministério da Marinha" },
      { value: "MAE", label: "Ministério da Aeronáutica" },
      { value: "MEX", label: "Ministério do Exército" },
      { value: "POF", label: "Polícia Federal" },
      { value: "POM", label: "Polícia Militar" },
      { value: "SES", label: "Carteira de Estrangeiro" },
      { value: "SJS", label: "Secretaria da Justiça e Segurança" },
      { value: "SJTS", label: "Secretaria da Justiça do Trabalho e Segurança" },
      { value: "ZZZ", label: "Outros (inclusive exterior)" }
    ]
  }
];

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
  render() {
    return (
      <SelectItens onChange={this.props.onChange}>
        {orgao[0].orgao_emissor.map((value) => {
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
