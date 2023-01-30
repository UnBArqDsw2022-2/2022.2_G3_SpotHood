import styled from "styled-components";
import React from "react";
import { Button, Card, CardActions, CardContent } from '@mui/material';
import { useEffect, useState } from "react";

interface Props {
  title: string;
  date: string;
  description: string;
  isAdmin: boolean;
}

const NewsCard: React.FC<Props> = ({title, date, description, isAdmin }) => {

  const formatedDate = new Date(date).toLocaleDateString();

  const CardDiv = styled.div`
    margin-bottom: 1.3rem;
    `;
    
  const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <CardDiv>
    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#c9e0b1" }}>
      <CardContent>
        <TitleDiv>
          <h1>{ title }</h1>
          <h3>{ formatedDate }</h3>
        </TitleDiv>
        <p>{ description }</p>
      </CardContent>
      <CardActions>
        { isAdmin ? <Button variant="outlined" size="small" style={{ borderColor: "#040a03", color: "#040a03" }}>Editar</Button> : null}
        { isAdmin ? <Button variant="outlined" size="small" style={{ borderColor: "#040a03", color: "#040a03" }}>Excluir</Button> : null}
      </CardActions>
    </Card>
    </CardDiv>
  );
};

export { NewsCard };
