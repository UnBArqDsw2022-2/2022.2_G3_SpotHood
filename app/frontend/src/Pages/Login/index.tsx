import { Link, useNavigate } from "react-router-dom";
import { Page, Container, Form, TextLink, ButtonDiv, CreateAccountDiv } from "./style";
import { Input } from "../../Components/Input";
import { CustomButton } from "../../Components/CustomButton";
import logo from "../../assets/SpotHood-logo.png";
import { spotHoodService } from "../../Services/spotHoodServices";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext)

  const {user, setUser} = userContext

  const signIn = async() => {
    const loginResponse = await spotHoodService.login(email, password)
    
    setUser(loginResponse)
  }

  console.log(user, "veja")

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // useEffect( () => {
  //   console.log(email, ' ', password);

  //   const x = async () => {
  //     const teste = await spotHoodService.getPeople()
  //     console.log(teste);
  //   }

  //   x();


  // }, [email, password])

  return (
    <Page>
      <Container>
        <img src={logo} alt="spothood-logo" width="50%" />
        <Form>
          <Input label="E-mail" type="text" setText={setEmail} value={email} size = "100%"/>
          <Input label="Senha" type="password" setText={setPassword} value={password} size = "100%"/>
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
