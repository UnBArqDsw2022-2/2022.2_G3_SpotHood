import styled from "styled-components";

const Page = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: white;
  display: flex;
  width: 40rem;
  height: 30rem;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 2px 2px 5px black;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
  box-sizing: border-box;
`;


export { Page, Container, Form };
