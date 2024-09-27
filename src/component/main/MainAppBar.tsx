import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { ReactNode } from 'react';
import MainSideBarNavigation from './MainSideBarNavigation';
import MainComponentRenderer from './MainComponentRenderer';

const MainAppBar = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      gap={1}
      sx={{
        width: '100%',
        height: '100vh',
        padding: '10px',
        boxSizing: 'border-box',
      }}
    >
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
          </IconButton> */}
          <Typography variant="h6" >
            Dev History
          </Typography>
        </Toolbar>
      </AppBar>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          width: '100%',
          height: 'calc(100vh - 90px)', 
        }}
      >
        <MainSideBarNavigation />
        <MainComponentRenderer>{children}</MainComponentRenderer>
      </Stack>
    </Stack>
  );
};

export default MainAppBar;
