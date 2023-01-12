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
  height: 26rem;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 2px 2px 5px black;
  margin: 1rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  margin-top: 2rem;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 0;
`;

const BigInput = styled.div`
  gap: 1rem;
`;
const SmallInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonDiv = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export { Page, Container, Form, Title, BigInput, SmallInput, ButtonDiv };
