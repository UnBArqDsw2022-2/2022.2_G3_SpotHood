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

  const CardDiv = styled.div`
    margin-bottom: 1.3rem;
    `;
    
  const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <CardDiv>
    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#919BDE" }}>
      <CardContent>
        <TitleDiv>
          <h1>{ title }</h1>
          <h3>{ date }</h3>
        </TitleDiv>
        <p>{ description }</p>
      </CardContent>
      <CardActions>
        { isAdmin ? <Button size="small">Editar</Button> : null}
        { isAdmin ? <Button size="small">Excluir</Button> : null}
      </CardActions>
    </Card>
    </CardDiv>
  );
};

export { NewsCard };
