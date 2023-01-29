import { useNavigate } from "react-router-dom";
import { Page, Container, Form, Title, BigInput, SmallInput, ButtonDiv } from "./style";
import { Input } from "../../Components/Input";
import { CustomButton } from "../../Components/CustomButton";
import logo from "../../assets/SpotHood-logo.png";
import { useState } from "react";
import { networkInterfaces } from "os";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const [sexo, setSexo] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthDate] = useState(Date.now());

  console.log(birthdate)

  return (
    <Page>
      <Container>
        <Title>Criar conta</Title>
        <Form>
          <BigInput>
            <Input label = "Nome" 
              type = "text" 
              setText = {setName} 
              value = {name}
              size = "100%"
            />   
          </BigInput>
          <BigInput>
            <Input label = "E-mail" 
              type = "text" 
              setText = {setEmail} 
              value = {email}
              size = "100%"
            /> 
          </BigInput>
          <BigInput>
            <Input label = "Senha" 
              key="password" 
              type = "password" 
              setText = {setPassword} 
              value = {password}
              size = "100%"
            />   
          </BigInput>
          <BigInput>
            <Input label = "Senha"
              key="confirm-password" 
              type = "password" 
              setText = {setConfirmPassword} 
              value = {confirmPassword}
              size = "100%"
            />   
          </BigInput>
          <SmallInput>
            <Input label = "CPF" 
              type = "text" 
              setText = {setCPF} 
              value = {cpf}
              size = "49%"
            /> 
            <Input label = "Sexo" 
              type = "text" 
              setText = {setSexo} 
              value = {sexo}
              size = "49%"
            /> 
          </SmallInput>
          <SmallInput>
            <Input label = "Telefone" 
              type = "text" 
              setText = {setPhone} 
              value = {phone}
              size = "49%"
            /> 
            <Input label = "Data Nascimento" 
              type = "date" 
              setText = {setBirthDate} 
              value = {birthdate}
              size = "49%"
            /> 
          </SmallInput>
        </Form>
        <ButtonDiv>
          <CustomButton
            label="Voltar"
            color="inherit"
            onClick={() => navigate('/')}
          />
          <CustomButton
            label="Cadastrar"
            color="primary"
            onClick={() => navigate('/')}
          />
        </ButtonDiv>
      </Container>
    </Page>
  );
};

export { Signup };
