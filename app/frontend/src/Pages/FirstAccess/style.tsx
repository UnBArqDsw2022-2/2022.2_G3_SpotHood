import styled from "styled-components";

const Page = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
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
  display: inline;
  margin: 2rem;
  justify-content: space-evenly;
`

const CreateAccountDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

export { Page, TextLink, ButtonDiv, CreateAccountDiv };
