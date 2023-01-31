import { Link, useNavigate } from "react-router-dom";
import { Page, Container, Title, ButtonDiv } from './style';
import logo from "../../../assets/SpotHood-logo.png";
import { spotHoodService } from "../../../Services/spotHoodServices";
import { useState, useEffect } from 'react';
import { BigIconButton } from "../../../Components/BigIconButton";

const HousingArea = () => {
	interface espaco {
		idEspacoHabitacional: number
		cnpj: string
		nome: string
		descricao: string
	}

	const [housingAreas, setHousingAreas] = useState<espaco[]>([]);
  const [cond, setCond] = useState({});

	useEffect( () => {
		const getCondInfo = async () => {
			let cResult = await spotHoodService.getCond();
			setCond(cResult[0]);

			await spotHoodService
			.getHousing()
			.then(res=>{
				setHousingAreas(res);
			})
		}
		getCondInfo();
	},[])
	housingAreas.map(area=>{
		console.log(area)
	})
  return (
    <Page>
      <Container>
        <Title>Espaços Habitacionais do Condomínio</Title>
        <ButtonDiv>
					{
						housingAreas.map(area=> <div>{area.nome}</div>)
					}
				</ButtonDiv>
        <div><img src={logo} alt="spothood-logo" width="60%" /></div>
      </Container>
    </Page>
  );
}
export { HousingArea };