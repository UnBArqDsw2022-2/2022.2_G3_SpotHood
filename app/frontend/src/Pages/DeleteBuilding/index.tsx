import { useNavigate } from "react-router-dom";
import { Page, Container, Title, ButtonDiv } from './style';
import { CustomButton } from "../../Components/CustomButton";
import logo from "../../assets/SpotHood-logo.png";

const DeleteBuilding = () => {
  const navigate = useNavigate();
    
  const voltar = () => {
    navigate("/imoveis");
  }
  const deleteIn = () => {
    alert('Imovel deletado')
    navigate("/imoveis");
  } 

  return (
    <Page>
      <Container>
        <Title>Deseja mesmo excluir o imovel?</Title>
        <ButtonDiv>
            <CustomButton
                label="Cancelar"
                color="inherit"
                onClick={() => voltar()}
            />
            <CustomButton
                label="Deletar"
                color="error"
                onClick={() => deleteIn()}
           />
        </ButtonDiv>       
        <div><img src={logo} alt="spothood-logo" width="60%" /></div>
      </Container>
    </Page>
  );
}
export { DeleteBuilding };
