import { useNavigate } from "react-router-dom";
import {
  Page,
  Container,
  Form,
  Title,
  BigInput,
  SmallInput,
  ButtonDiv,
} from "./style";
import { Input } from "../../Components/Input";
import { CustomButton } from "../../Components/CustomButton";
import { useState } from "react";
import { spotHoodService } from "../../Services/spotHoodServices";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [sexo, setSexo] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthDate] = useState(
    new Date().toISOString().substring(0, 10)
  );

  const HandleNewAccount = () => {
    if (
      cpf === "" ||
      name === "" ||
      password === "" ||
      email === "" ||
      phone === "" ||
      birthdate === "" ||
      sexo === ""
    ) {
      alert("Preenchas os campos corretamente");
    } else {
      const x = spotHoodService.createAccount(
        cpf,
        name,
        email,
        phone,
        password,
        sexo,
        birthdate
      );
    }

    navigate("/")
  };

  return (
    <Page>
      <Container>
        <Title>Criar conta</Title>
        <Form>
          <BigInput>
            <Input
              label="Nome"
              type="text"
              setText={setName}
              value={name}
              size="100%"
            />
          </BigInput>
          <BigInput>
            <Input
              label="E-mail"
              type="text"
              setText={setEmail}
              value={email}
              size="100%"
            />
          </BigInput>
          <BigInput>
            <Input
              label="Senha"
              key="password"
              type="password"
              setText={setPassword}
              value={password}
              size="100%"
            />
          </BigInput>
          <BigInput>
            <Input
              label="Confirmar Senha"
              key="confirm-password"
              type="password"
              setText={setConfirmPassword}
              value={confirmPassword}
              size="100%"
            />
          </BigInput>
          <SmallInput>
            <Input
              label="CPF"
              type="text"
              setText={setCPF}
              value={cpf}
              size="49%"
            />
            <FormControl
              sx={{ m: 1, minWidth: 120 }} size="small"
            >
              <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sexo}
                label="Sexo"
                onChange={(e) => setSexo(e.target.value)}
              >
                <MenuItem value={"M"}>Masculino</MenuItem>
                <MenuItem value={"F"}>Feminino</MenuItem>
              </Select>
              </FormControl>
          </SmallInput>
          <SmallInput>
            <Input
              label="Telefone"
              type="text"
              setText={setPhone}
              value={phone}
              size="49%"
            />
            <Input
              label="Data Nascimento"
              type="date"
              setText={setBirthDate}
              value={birthdate}
              size="49%"
            />
          </SmallInput>
        </Form>
        <ButtonDiv>
          <CustomButton
            label="Voltar"
            color="inherit"
            onClick={() => navigate("/")}
          />
          <CustomButton
            label="Cadastrar"
            color="primary"
            onClick={() => HandleNewAccount()}
          />
        </ButtonDiv>
      </Container>
    </Page>
  );
};

export { Signup };
