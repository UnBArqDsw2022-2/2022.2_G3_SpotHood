import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
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

export { Page, Container, ContainerInput, ContainerButton, ButtonDiv, CreateAccountDiv };
