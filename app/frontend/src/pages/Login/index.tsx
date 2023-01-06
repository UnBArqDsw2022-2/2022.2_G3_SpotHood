import { Link, useNavigate } from "react-router-dom";
import { Page, Container, Form, TextLink, ButtonDiv, CreateAccountDiv } from "./style";
import { Input } from "../../Components/Input";
import { CustomButton } from "../../Components/CustomButtom";
import logo from "../../assets/SpotHood-logo.png";
import { blue } from "@mui/material/colors";
import { useEffect, useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const signIn = () => {
    alert('logou');
  }

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect( () => {
    console.log(email, ' ', password);
  }, [email, password])

  return (
    <Page>
      <Container>
        <img src={logo} alt="spothood-logo" width="50%" />
        <Form>
          <Input label="E-mail" type="text" setText={setEmail} value={email}/>
          <Input label="Senha" type="password" setText={setPassword} value={password} />
        </Form>
        <TextLink>Esqueceu a senha?</TextLink>
        <ButtonDiv>
          <CustomButton
            label="Entrar"
            color="primary"
            onClick={() => signIn()}
          />
        </ButtonDiv>
        <CreateAccountDiv>
          <p>
            Não possui uma conta?
          </p>
          <Link
            to='/criar-conta'
          >
            Criar conta
          </Link>
        </CreateAccountDiv>
      </Container>
    </Page>
  );
};

export { Login };
