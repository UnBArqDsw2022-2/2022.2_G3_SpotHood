import { Link, useNavigate } from "react-router-dom";
import { Page, TextLink, ButtonDiv, CreateAccountDiv } from "./style";
import { Input } from "../../Components/Input";
import { BigIconButton } from "../../Components/BigIconButton";
import logo from "../../assets/SpotHood-logo.png";
import addIcon from "../../assets/addCond.png";
import joinIcon from "../../assets/joinCond.png";
import { blue } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const FirstAccess = () => {
  const navigate = useNavigate();

  useEffect( () => {
  }, []);

  return (
    <Page>
      <div>
        <h1>Bem-vindo username!</h1>
        <h2>Para continuar crie um condomínio ou participe de um existente.</h2>
      </div>
      <div>
      <ButtonDiv>
        <BigIconButton 
          src={addIcon}
          alt="primary"
          label="Adicionar condomínio"
          color="#41AD4C"
          onClick={() => alert("Cliquei")}
        />
        <BigIconButton 
          src={joinIcon}
          alt="primary"
          label="Entrar em um condominio"
          color="#747AFE"
          onClick={() => alert("Cliquei")}
        />
      </ButtonDiv>
      </div>
        <img src={logo} alt="spothood-logo" width="10%" />
    </Page>
  );
};

export { FirstAccess };
