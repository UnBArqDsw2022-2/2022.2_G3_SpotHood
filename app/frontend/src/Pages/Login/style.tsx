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
  width: 18rem;
  height: 25rem;
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

const TextLink = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
  color: #747afe;
  margin: 0;
`;

const ButtonDiv = styled.div`
  display: flex;
  margin-top: 2rem;
`

const CreateAccountDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

export { Page, Container, Form, TextLink, ButtonDiv, CreateAccountDiv };
