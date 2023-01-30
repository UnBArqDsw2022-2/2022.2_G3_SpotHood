import { Link, useNavigate } from "react-router-dom";
import { Page, Container, Title, Form, ButtonDiv, SmallInput } from './style';
import { BigIconButton } from "../../Components/BigIconButton";
import addIcon from "../../assets/addCond.png";
import closeIcon from "../../assets/closeIcon.png";
import logo from "../../assets/SpotHood-logo.png";

const Building = () => {
  const navigate = useNavigate();
  const addBtnHoverColor = [100, 196, 111];
  const closeBtnHoverColor = [134, 139, 247];

  const cadastroIn = () => {
    navigate("/cadastrar-imovel");
  }

  return (
    <Page>
      <Container>
        <Title>Imóveis do Condomínio</Title>
        <ButtonDiv>
          <BigIconButton
                src={addIcon}
                alt="primary"
                label={["Adicionar","imovel"]}
                color="#41AD4C"
                hoverColor={addBtnHoverColor}
                onClick={() => cadastroIn()}
                style={{
                    width:"25%"
                  }}
          />
          <BigIconButton
                src={closeIcon}
                alt="primary"
                label={["Imovel","Paulo Souza"]}
                color="#a0a0a0"
                hoverColor={closeBtnHoverColor}
                onClick={() => cadastroIn()}
                style={{
                    width:"25%"
                }}
          />
        </ButtonDiv>       
        <div><img src={logo} alt="spothood-logo" width="60%" /></div>
      </Container>
    </Page>
  );
}
export { Building };
