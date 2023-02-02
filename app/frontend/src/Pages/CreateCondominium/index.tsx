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
import { useEffect, useState } from "react";
import { spotHoodService } from "../../Services/spotHoodServices";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CreateCondominium = () => {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [nome_fantasia, setNome_fantasia] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [pessoas, setPessoas] = useState([])

  const HandleNewCondominium = () => {

      const NewCond = spotHoodService.createCodominium(
        cpf,
        cnpj,
        nome_fantasia,
        cep,
        numero,
        rua,
        bairro,
        cidade,
        estado
      );

    navigate("/avisos")
  };

  useEffect(() => {
    const getPessoa = async () => {
      let pessoaRes = await spotHoodService.getPeople();
      setPessoas(pessoaRes);
    };

    getPessoa();
  }, []);

  return (
    <Page>
      <Container>
        <Title>Criar conta</Title>
        <Form>
          <BigInput>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">CPF do Sindico</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cpf}
              label="123.123.123-11"
              onChange={(e) => setCpf(e.target.value)}
            >
              {pessoas.map((pessoa: any) => {
                return <MenuItem value={pessoa?.cpf}>{pessoa?.cpf}</MenuItem>;
              })}
            </Select>
          </FormControl>
          </BigInput>
          <BigInput>
            <Input
              label="CNPJ"
              type="text"
              setText={setCnpj}
              value={cnpj}
              size="100%"
            />
          </BigInput>
          <BigInput>
            <Input
              label="Nome Fantasia"
              key="nome_fantasia"
              type="text"
              setText={setNome_fantasia}
              value={nome_fantasia}
              size="100%"
            />
          </BigInput>
          <BigInput>
            <Input
              label="CEP"
              key="cep"
              type="text"
              setText={setCep}
              value={cep}
              size="100%"
            />
          </BigInput>
          <SmallInput>
            <Input
              label="Numero"
              type="text"
              setText={setNumero}
              value={numero}
              size="49%"
            />
            <Input
              label="Rua"
              type="text"
              setText={setRua}
              value={rua}
              size="49%"
            />
          </SmallInput>
          <SmallInput>
            <Input
              label="Bairro"
              type="text"
              setText={setBairro}
              value={bairro}
              size="100%"
            />
          </SmallInput>
          <SmallInput>
          <Input
              label="Cidade"
              type="text"
              setText={setCidade}
              value={cidade}
              size="49%"
            />
            <FormControl
              sx={{ m: 1, minWidth: 120 }} size="small"
            >
              <InputLabel id="demo-simple-select-label">Cidade</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={estado}
                label="Sexo"
                onChange={(e) => setEstado(e.target.value)}
              >
                <MenuItem value={"AC"}>Acre</MenuItem>
                <MenuItem value={"AL"}>Alagoas</MenuItem>
                <MenuItem value={"AP"}>Amapá</MenuItem>
                <MenuItem value={"AM"}>Amazonas</MenuItem>
                <MenuItem value={"BA"}>Bahia</MenuItem>
                <MenuItem value={"CE"}>Ceará</MenuItem>
                <MenuItem value={"DF"}>Distrito Federal</MenuItem>
                <MenuItem value={"ES"}>Espírito Santo</MenuItem>
                <MenuItem value={"GO"}>Goiás</MenuItem>
                <MenuItem value={"MA"}>Maranhão</MenuItem>
                <MenuItem value={"MT"}>Mato Grosso</MenuItem>
                <MenuItem value={"MS"}>Mato Grosso do Sul</MenuItem>
                <MenuItem value={"MG"}>Minas Gerais</MenuItem>
                <MenuItem value={"PA"}>Pará</MenuItem>
                <MenuItem value={"PB"}>Paraíba</MenuItem>
                <MenuItem value={"PR"}>Paraná</MenuItem>
                <MenuItem value={"PE"}>Pernambuco</MenuItem>
                <MenuItem value={"PI"}>Piauí</MenuItem>
                <MenuItem value={"RJ"}>Rio de Janeiro</MenuItem>
                <MenuItem value={"RN"}>Rio Grande do Norte</MenuItem>
                <MenuItem value={"RS"}>Rio Grande do Sul</MenuItem>
                <MenuItem value={"RO"}>Rondônia</MenuItem>
                <MenuItem value={"RR"}>Roraima</MenuItem>
                <MenuItem value={"SC"}>Santa Catarina</MenuItem>
                <MenuItem value={"SP"}>São Paulo</MenuItem>
                <MenuItem value={"SE"}>Sergipe</MenuItem>
                <MenuItem value={"TO"}>Tocantins</MenuItem>
              </Select>
              </FormControl>
          </SmallInput>
        </Form>
        <ButtonDiv>
          <CustomButton
            label="Voltar"
            color="inherit"
            onClick={() => navigate("/primeiro-acesso")}
          />
          <CustomButton
            label="Cadastrar"
            color="primary"
            onClick={() => HandleNewCondominium()}
          />
        </ButtonDiv>
      </Container>
    </Page>
  );
};

export { CreateCondominium };
