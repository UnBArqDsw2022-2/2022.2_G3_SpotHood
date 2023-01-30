import { useNavigate } from "react-router-dom";
import { Page, Container, CardsContainer, ContainerInput, ContainerButton, ButtonDiv } from "./style";
import { Input } from "../../Components/Input";
import { NewsCard } from "../../Components/NewsCard";
import logo from "../../assets/SpotHood-logo.png";
import { useEffect, useState } from "react";
import Add from '@mui/icons-material/Add';
import { Button, Modal } from "@mui/material";
import { spotHoodService } from "../../Services/spotHoodServices";

const News = () => {
  const navigate = useNavigate();

  const signIn = () => {
    alert('Entrou no condomínio!');
  }
  
  const renderNews: any = () => {
    return news.reverse().map((n: any) => {
      return(
        <NewsCard title={n?.titulo} date={n?.data_cadastro} description={n?.descricao} isAdmin={false} />
      );
    });
  };

  const [news, setNews] = useState([]);
  const cnpj = "22.222.222/0002-22";

  useEffect( () => {
    const getNews = async () => {
      let result = await spotHoodService.getNews();
      result = result.reverse();
      setNews(result);
    }

    getNews();


  }, [])

  return (
    <Page>
      <Container>
        <h1>Avisos do condomínio</h1>
        <Button variant="contained" startIcon={<Add/>} aria-label="addNews" size="large" style={{ backgroundColor: '#4f6ec4'}} > Novo Aviso </Button>
      </Container>
      <CardsContainer>
        { renderNews() }
      </CardsContainer>
    </Page>
  );
};

export { News };
