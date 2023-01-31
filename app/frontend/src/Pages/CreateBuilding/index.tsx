import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Page, Container, Title, Form, ButtonDiv, SmallInput } from './style';
import { Input } from "../../Components/Input";
import { CustomButton } from "../../Components/CustomButton";

const CreateBuilding = () => {
  const navigate = useNavigate();

  const [cpfProprietario, setCpfProprietario] = useState('');
  const [informacao, setInformacao] = useState('');
  const cadastrou = () => {
    alert('Cadastrou');
    navigate('/imoveis')
  }
  return (
    <Page>
      <Container>
      <Title>Adicionar Imóvel ao Condomínio</Title>
        <Form>
          <SmallInput>
            <Input label = "CPF do Proprietário"
              type = "text"
              setText = {setCpfProprietario}
              value = {cpfProprietario}
              size = "100%"
            />
          </SmallInput>
          <SmallInput>
            <Input label = "Informação Complementar"
              type = "text"
              setText = {setInformacao}
              value = {informacao}
              size="100%"
            />
          </SmallInput>
        </Form>
        <ButtonDiv>
          <CustomButton
            label="Voltar"
            color="inherit"
            onClick={() => navigate('/imoveis')}
          />
          <CustomButton
            label="Cadastrar"
            color="primary"
            onClick={() => cadastrou()}
          />
        </ButtonDiv>
      </Container>
    </Page>
  );
}

export { CreateBuilding };
