import React from 'react';
import { Container, Typography, Card, CardContent, Stack } from '@mui/material';

const HomeComponent = () => {
  return (
    <Stack
      style={{
        maxHeight: 'calc(100vh - 150px)',
        overflowY: 'auto',
      }}
    >
      <Container maxWidth="md" sx={{ padding: 4, textAlign: 'center' }}>
        <Card elevation={2} sx={{ padding: 4 }}>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome To My Page
            </Typography>
            <Typography variant="body1" paragraph>
              I am a passionate web developer with a strong background in both
              frontend and backend technologies. I graduated with a Bachelor of
              Science in Information Technology, majoring in Website Development
              from the University of the Cordilleras in April 2020.
            </Typography>
            <Typography variant="body1" paragraph>
              I have experience working as a Junior Developer & IT Desk Support
              Intern and as a Web Programmer, where I&apos;ve contributed to various
              projects, focusing on enhancing user experience and optimizing
              backend processes.
            </Typography>
            <Typography variant="body1" paragraph>
              I thrive in high-pressure situations and am committed to
              continuous learning. Feel free to explore my portfolio to see my
              work and projects!
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Stack>
  );
};

export default HomeComponent;
