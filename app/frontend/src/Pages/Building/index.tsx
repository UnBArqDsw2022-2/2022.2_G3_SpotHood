import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Page, Container, Title, Form, ButtonDiv, SmallInput } from './style';
import { BigIconButton } from "../../Components/BigIconButton";
import addIcon from "../../assets/addCond.png";
import logo from "../../assets/SpotHood-logo.png";

const Building = () => {
  const navigate = useNavigate();
  const addBtnHoverColor = [100, 196, 111];

  const cadastroIn = () => {
    navigate("/cadastrar-imovel");
  }

  return (
    <Page>
      <Container>
      <Title>Imóveis do Condomínio</Title>
      <BigIconButton
            src={addIcon}
            alt="primary"
            label={["Adicionar","imovel"]}
            color="#41AD4C"
            hoverColor={addBtnHoverColor}
            onClick={() => cadastroIn()}
            style={{
                width:"20%"
              }}
        />        
        <div><img src={logo} alt="spothood-logo" width="70%" />
        </div>
      </Container>
    </Page>
  );
}
export { Building };
