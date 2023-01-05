import { Link, useNavigate } from "react-router-dom";
import { Page, Container, Form, TextLink, ButtonDiv, CreateAccountDiv } from "./style";
import { Input } from "../../Components/Input";
import { CustomButton } from "../../Components/CustomButtom";
import logo from "../../assets/SpotHood-logo.png";
import { blue } from "@mui/material/colors";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Container>
        <img src={logo} alt="spothood-logo" width="50%" />
        <Form>
          <Input label="E-mail" type="text" />
          <Input label="Senha" type="password" />
        </Form>
        <TextLink>Esqueceu a senha?</TextLink>
        <ButtonDiv>
          <CustomButton label="Entrar" color="primary" />
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
