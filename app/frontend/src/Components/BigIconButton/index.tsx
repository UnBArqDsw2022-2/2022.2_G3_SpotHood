import styled from "styled-components";
import React from "react";
interface Props {
  src: string;
  alt: string;
  label: string;
  color: string;
  onClick: () => void;
}

const BigIconButton: React.FC<Props> = ({ src, alt, label, color, onClick }) => {

  const BigButton = styled.button`
    background-color: ${color};
    border: none;
    padding: 2rem;
    margin: 3rem;
    border-radius: 0.5rem;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  `;

  return (
    <BigButton>
      <img src={src} alt={alt} onClick={onClick}/>
      <p>{label}</p>
    </BigButton>
  );
};

export { BigIconButton };
