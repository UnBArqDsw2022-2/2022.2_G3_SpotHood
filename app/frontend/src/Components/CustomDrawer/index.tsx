import React, { useState } from "react";
import { Box, Drawer, IconButton, Link, makeStyles } from "@mui/material";
import Icon from "../Icons";
import { OptionContainer, PhotoContainer } from "./style";
import { useNavigate } from "react-router-dom";

interface Props {}

const CustomDrawer: React.FC<Props> = ({}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        sx={{ mr: 2 }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <Icon
          name="menu"
          action={() => null}
          style={{
            fontSize: "25px",
          }}
        />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        style={{
          backgroundColor: "8B8B8B"
        }}
      >
        <Box width="250px" textAlign="center" role="presentation">
          <PhotoContainer>
            <Icon
              name="account-circle"
              action={() => null}
              style={{ fontSize: "15rem" }}
            />
            <h2>Nome da pessoa</h2>
            <Link
              onClick={() => {navigate("/perfil")}}
            >
              Acessar perfil
            </Link>
          </PhotoContainer>
          <OptionContainer
            style={{
              fontWeight: "bold"
            }}
            onClick={() => {navigate("/avisos")}}
          >
            Avisos
          </OptionContainer>
          <OptionContainer
            style={{
              fontWeight: "bold"
            }}
            onClick={() => {navigate("/reserva")}}
          >
            Reserva
          </OptionContainer>
          <OptionContainer
            style={{
              fontWeight: "bold"
            }}
            onClick={() => {navigate("/imovel")}}
          >
            Meu Imóvel
          </OptionContainer>
          <OptionContainer
            style={{
              fontWeight: "bold"
            }}
            onClick={() => {navigate("/")}}
          >
            Sair
          </OptionContainer>
        </Box>
      </Drawer>
    </>
  );
};

export { CustomDrawer };
