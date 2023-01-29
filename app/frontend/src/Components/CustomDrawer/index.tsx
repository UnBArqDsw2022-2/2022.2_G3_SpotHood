import React, { useState } from "react";
import { Box, Drawer, IconButton, makeStyles, Typography } from "@mui/material";
import Icon from "../Icons";
import { OptionContainer, PhotoContainer } from "./style";

interface Props {}

const CustomDrawer: React.FC<Props> = ({}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        sx={{ mr: 2 }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <Icon
          name="menu"
          action={() => null}
        />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        classes={{  }}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <PhotoContainer>

          </PhotoContainer>
          <OptionContainer>
            teste
          </OptionContainer>
        </Box>
      </Drawer>
    </>
  );
};

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  paper: {
    background: "blue"
  }
});

export { CustomDrawer };
