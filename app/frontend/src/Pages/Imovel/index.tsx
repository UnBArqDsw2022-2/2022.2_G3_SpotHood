import { useNavigate } from "react-router-dom";
import {
  Page,
  Container,
  CardsContainer,
  ContainerInput,
  ContainerButton,
  ButtonDiv,
} from "./style";
import { Input } from "../../Components/Input";
import { NewsCard } from "../../Components/NewsCard";
import logo from "../../assets/SpotHood-logo.png";
import { useContext, useEffect, useState } from "react";
import Add from "@mui/icons-material/Add";
import {
  Button,
  Modal,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { spotHoodService } from "../../Services/spotHoodServices";
import { UserContext } from "../../Context/UserContext";

const Imovel = () => {
  const navigate = useNavigate();
  const [pessoas, setPessoas]: any = useState([]);

  const { user } = useContext(UserContext);

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [cpf, setCpf] = useState("");
  const [cnpj, setCpnj] = useState("");
  const [informacaoComplementar, setInformacaoComplementar] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateImovel = () => {
    spotHoodService.createImovel(cpf, cnpj, informacaoComplementar); //arrumar confInfo para coletar o CPF
    handleClose();
    window.location.reload();
    setCpf("");
    setCpnj("");
    setInformacaoComplementar("");
  };

  const signIn = () => {
    alert("Entrou no condomínio!");
  };

  const renderNews: any = () => {
    return imoveis.map((n: any) => {
      return (
        <NewsCard
          title={n?.cpf}
          date="2023-2-3"
          description={n?.informacao_complementar}
          isAdmin={false}
        />
      );
    });
  };

  const [imoveis, setImoveis] = useState([]);
  const [condInfo, setCondInfo]: any = useState({});

  useEffect(() => {
    const getImoveis = async () => {
      let result = await spotHoodService.getImoveis();
      result = result.reverse();
      setImoveis(result);
    };

    const getCondInfo = async () => {
      let cResult = await spotHoodService.getCond();
      setCondInfo(cResult);
    };

    const getPessoa = async () => {
      let pessoaRes = await spotHoodService.getPeople();
      setPessoas(pessoaRes);
    };

    getPessoa();
    getCondInfo();
    getImoveis();
  }, []);

  console.log(pessoas);

  return (
    <Page>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <h2>Crie um novo Imóvel</h2>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">CPF</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cpf}
              label="123.123.123-11"
              onChange={(e) => setCpf(e.target.value)}
            >
              {pessoas.map((pessoa: any) => {
                return <MenuItem value={pessoa?.cpf}>{pessoa?.cpf}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">CNPJ</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cnpj}
              label="21.963.622/0001-95"
              onChange={(e) => setCpnj(e.target.value)}
            >
              <MenuItem value={condInfo[0]?.cnpj}>{condInfo[0]?.cnpj}</MenuItem>;
            </Select>
          </FormControl>
          <br />
          <Input
            label="Informacao complementar"
            type="text"
            setText={setInformacaoComplementar}
            value={informacaoComplementar}
            size="100%"
          />
          <br />
          <Button
            variant="contained"
            onClick={handleCreateImovel}
            startIcon={<Add />}
            aria-label="postNews"
            size="small"
            style={{ backgroundColor: "#4f6ec4" }}
          >
            {" "}
            Criar Imóvel{" "}
          </Button>
        </Box>
      </Modal>
      <Container>
        <h1>Imóveis do condomínio</h1>
        {/* se for admin n mostrar esse button */}
        <div hidden={user[0]?.cpf === condInfo[0]?.cpf ? false : true}>
          <Button
            variant="contained"
            onClick={handleOpen}
            startIcon={<Add />}
            aria-label="addNews"
            size="large"
            style={{ backgroundColor: "#4f6ec4" }}
          >
            Novo Imóvel
          </Button>
        </div>
      </Container>
      <CardsContainer>{renderNews()}</CardsContainer>
    </Page>
  );
};

export { Imovel };
