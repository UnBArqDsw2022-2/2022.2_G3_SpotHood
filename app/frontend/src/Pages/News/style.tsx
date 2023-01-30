import styled from "styled-components";

const Page = styled.div`
  display: inline;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: white;
  overflow-x: hidden;
`;

const CardsContainer = styled.div`
  width: auto;
  text-align: left;
  margin-right: 3rem;
  margin-left: 3rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 3rem;
  text-align: left;
  margin: 2rem;
  margin-bottom: 3rem;
  align-itens: center;
`;

const ContainerInput = styled.div`
  width: 150vh;
  text-align: center;
`;

const ContainerButton = styled.div`
  width: 90vh;
  display: inline-flex;
`;

const ButtonDiv = styled.div`
  width: 100%;
`

const CreateAccountDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

export { Page, Container, ContainerInput, ContainerButton, ButtonDiv, CreateAccountDiv, CardsContainer };
