import { Card, CardContent, Stack } from '@mui/material';
import React, { ReactNode } from 'react';

const MainComponentRenderer = ({ children }: { children: ReactNode }) => {
  return (
      <Card sx={{ width: '100%', height: '100%' }}>
        <CardContent>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            width='100%'
            height='100%'
          >
            {children}
          </Stack>
        </CardContent>
      </Card>
  );
};

export default MainComponentRenderer;
