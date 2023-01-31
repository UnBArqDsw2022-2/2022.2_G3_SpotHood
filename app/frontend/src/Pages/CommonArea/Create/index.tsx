import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Page, Container, Title, Form, ButtonDiv, SmallInput } from './style';
import { Input } from "../../../Components/Input";
import { CustomButton } from "../../../Components/CustomButton";
import { spotHoodService } from "../../../Services/spotHoodServices";

const CreateHousingArea = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cnpj, setCnpj] = useState({});
  useEffect( () => {

    const getCondInfo = async () => {
      let cResult = await spotHoodService.getCond();
      setCnpj(cResult[0]);
    }

    getCondInfo();
    console.log(cnpj);

  }, [])

  return (
    <Page>
      <Container>
      <Title>Adicionar Área Comum</Title>
        <Form>
          <SmallInput>
            <Input label = "Título"
              type = "text"
              setText = {setName}
              value = {name}
              size = "100%"
            />
          </SmallInput>
          <SmallInput>
            <Input label = "Descrição"
              type = "text"
              setText = {setDescription}
              value = {description}
              size="100%"
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
            onClick={() => {
              spotHoodService.createHousing({cnpj, description, name})
              navigate('/criar-espaco')
            }}
          />
        </ButtonDiv>
      </Container>
    </Page>
  );
}

export { CreateHousingArea };
