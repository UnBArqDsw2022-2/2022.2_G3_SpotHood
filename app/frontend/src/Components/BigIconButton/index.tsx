import styled from "styled-components";
import React from "react";
interface Props {
  src: string;
  alt: string;
  label: string|Array<string>;
  color: string;
  hoverColor: number[];
  onClick: () => void;
  style?: React.CSSProperties;
}

const BigIconButton: React.FC<Props> = ({ src, alt, label, color, hoverColor, onClick, style={width: "10%"} }) => {

  const BigButton = styled.button`
    background-color: ${color};
    border: none;
    margin: 3rem;
    border-radius: 0.5rem;
    width: ${style.width};
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
    &:hover{
      background-color: rgb(${hoverColor[0]}, ${hoverColor[1]}, ${hoverColor[2]});
    }
  `;

  const IMGBtn = styled.img`
    margin-right: 1rem;
    margin-left: 1rem;
    margin-top: 1rem;
    width: 8vh;
    pointer-events: none;
  `;

  const PButton = styled.p`
    font-family: 'Ubuntu';
    font-size: 1.2rem;
    margin-top: 1.5rem;
  `;

  return (
    <BigButton onClick={onClick}>
      <IMGBtn src={src} alt={alt} />
      <PButton>{
        (typeof label) == "string"?
        label: label.toString().replace(",","\n")
      }</PButton>
    </BigButton>
  );
};

export { BigIconButton };