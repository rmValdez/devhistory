import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
} from '@mui/material';

const ContactComponent = () => {
  return (
    <Stack
      style={{
        maxHeight: 'calc(100vh - 150px)',
        overflowY: 'auto',
      }}
    >
      <Container maxWidth="md" sx={{ padding: 4, borderRadius: 2 }}>
        <Card elevation={2} sx={{ marginBottom: 4 }}>
          <CardContent>
            <Typography variant="h6" component="h2">
              Contact Information
            </Typography>
            <Typography>
              <strong>Name:</strong> Reign Mark B. Valdez
            </Typography>
            <Typography>
              <strong>Address:</strong> Magsaysay Rd., Loakan Proper, Baguio
              City, Benguet, Philippines 2600
            </Typography>
            <Typography>
              <strong>Phone:</strong> +63 939 074 8875
            </Typography>
            <Typography>
              <strong>Email:</strong> valdezreignmark@gmail.com
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Stack>
  );
};

export default ContactComponent;
