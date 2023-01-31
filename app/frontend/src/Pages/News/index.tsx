import { useNavigate } from "react-router-dom";
import { Page, Container, CardsContainer, ContainerInput, ContainerButton, ButtonDiv } from "./style";
import { Input } from "../../Components/Input";
import { NewsCard } from "../../Components/NewsCard";
import logo from "../../assets/SpotHood-logo.png";
import { useContext, useEffect, useState } from "react";
import Add from '@mui/icons-material/Add';
import { Button, Modal, Box } from "@mui/material";
import { spotHoodService } from "../../Services/spotHoodServices";
import { UserContext } from "../../Context/UserContext";

const News = () => {
  const navigate = useNavigate();
  
  const { user } = useContext(UserContext);

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateNews = () => {
    spotHoodService.createNews("b", title, description); //arrumar confInfo para coletar o CPF
    handleClose()
    window.location.reload()
    setTitle("")
    setDescription("")
  }

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
  const [condInfo, setCondInfo] = useState([]);
  //const cnpj = "22.222.222/0002-22";

  useEffect( () => {
    const getNews = async () => {
      let result = await spotHoodService.getNews();
      result = result.reverse();
      setNews(result);
    }
    
    const getCondInfo = async () => {
      let cResult = await spotHoodService.getCond();
      setCondInfo(cResult[0]);
    }
  
    getCondInfo();
    getNews();
    console.log(condInfo);

  }, [])
 
  return (
    <Page>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <h2>Crie um novo aviso</h2>
          <Input label="Título" type="text" setText={setTitle} value={title} size = "100%"/>
          <br/>
          <Input label="Descrição" type="text" setText={setDescription} value={description} size = "100%"/>
          <br/>
          <Button variant="contained" onClick={handleCreateNews} startIcon={<Add/>} aria-label="postNews" size="small" style={{ backgroundColor: '#4f6ec4'}} > Criar Aviso </Button>
        </Box>
      </Modal>
      <Container>
        <h1>Avisos do condomínio</h1> 
        {/* se for admin n mostrar esse button */}
        <Button variant="contained" onClick={handleOpen} startIcon={<Add/>} aria-label="addNews" size="large" style={{ backgroundColor: '#4f6ec4'}} > Novo Aviso </Button>
      </Container>
      <CardsContainer>
        { renderNews() }
      </CardsContainer>
    </Page>
  );
};

export { News };
