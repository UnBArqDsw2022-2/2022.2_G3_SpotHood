import { Link, useNavigate } from "react-router-dom";
import { Page, Container, ContainerInput, ContainerButton, ButtonDiv } from "./style";
import { Input } from "../../Components/Input";
import { CustomButton } from "../../Components/CustomButton";
import logo from "../../assets/SpotHood-logo.png";
import { useEffect, useState } from "react";

const JoinCode = () => {
  const navigate = useNavigate();

  const signIn = () => {
    alert('Entrou no condomínio!');
  }

  const [accessCode, setAccessCode] = useState<string>('');

  useEffect( () => {
  }, []);

  return (
    <Page>
      <Container>
        <h1>Insira o código do seu condomínio: </h1>
      </Container>
      <ContainerInput>
        <Input size="100%" label="Código do condomínio" type="text" setText={setAccessCode} value={accessCode}/>
      </ContainerInput>
      <ContainerButton>
        <ButtonDiv>
          <CustomButton
            label="Voltar"
            color="secondary"
            onClick={() => signIn()}
          />
        </ButtonDiv>
        <ButtonDiv>
          <CustomButton
            label="Próximo"
            color="primary"
            onClick={() => signIn()}
          />
        </ButtonDiv>
      </ContainerButton>
      <Container>
        <img src={logo} alt="spothood-logo" width="10%" />
      </Container>
    </Page>
  );
};

export { JoinCode };
