import { useNavigate } from "react-router-dom";
import { Page, Container, CardsContainer, ContainerInput, ContainerButton, ButtonDiv } from "./style";
import { Input } from "../../Components/Input";
import { NewsCard } from "../../Components/NewsCard";
import logo from "../../assets/SpotHood-logo.png";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const News = () => {
  const navigate = useNavigate();
  const signIn = () => {
    alert('Entrou no condomínio!');
  }
  const [accessCode, setAccessCode] = useState<string>('');
  
  useEffect( () => {
  }, []);

  return (
    <Page>
      <Container>
        <h1>Avisos do condomínio</h1>
        <Button> Adicionar Aviso </Button>
      </Container>
      <CardsContainer>
        <NewsCard title="title" date="27/07/2013" description="lorem impsum" isAdmin={false} />
        <NewsCard title="title" date="27/07/2013" description="lorem impsum" isAdmin={true} />
        <NewsCard title="title" date="27/07/2013" description="lorem impsum" isAdmin={false} />
      </CardsContainer>
    </Page>
  );
};

export { News };
