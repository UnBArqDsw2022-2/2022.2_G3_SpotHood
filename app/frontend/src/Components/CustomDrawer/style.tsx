import styled from "styled-components";

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  justify-content: flex-start;
  align-items: center;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: min-content;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  box-sizing: border-box;
  
  &:hover {
    background-color: #808080;
  }
`

export { PhotoContainer, OptionContainer };
