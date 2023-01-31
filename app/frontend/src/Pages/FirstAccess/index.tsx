import { Link, useNavigate } from "react-router-dom";
import { Page, ButtonDiv } from "./style";
import { BigIconButton } from "../../Components/BigIconButton";
import logo from "../../assets/SpotHood-logo.png";
import addIcon from "../../assets/addCond.png";
import joinIcon from "../../assets/joinCond.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";

const FirstAccess = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext)

  const addBtnHoverColor = [100, 196, 111];
  const joinBtnHoverColor = [134, 139, 247];
  
  console.log(user)

  useEffect( () => {
  }, []);

  return (
    <Page>
      <div>
        <h1>Bem-vindo {user[0]?.nome}!</h1>
        <h2>Para continuar, crie um condomínio ou participe de um existente.</h2>
      </div>
      <div>
      <ButtonDiv>
        <BigIconButton 
          src={addIcon}
          alt="primary"
          label="Adicionar condomínio"
          color="#41AD4C"
          hoverColor={addBtnHoverColor}
          onClick={() => alert("Cliquei")}
          style={{
            width:"10%"
          }}
        />
        <BigIconButton 
          src={joinIcon}
          alt="primary"
          label="Entrar em um condominio"
          color="#747AFE"
          hoverColor={joinBtnHoverColor}
          onClick={() => alert("Desabilitado")}
          style={{
            width:"10%"
          }}
        />
      </ButtonDiv>
      </div>
        <img src={logo} alt="spothood-logo" width="10%" />
    </Page>
  );
};

export { FirstAccess };
