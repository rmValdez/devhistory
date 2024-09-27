import React from 'react';
import { Container, Typography, Card, CardContent, Stack } from '@mui/material';

const AboutComponent = () => {
  const combinedText = [
    'About Me',
    'Hello! My name is Reign Mark B. Valdez, and I am a passionate web developer based in the beautiful city of Baguio, Philippines. My journey in technology began when I graduated with a Bachelor of Science in Information Technology, majoring in Website Development from the University of the Cordilleras in April 2020.',
    'Throughout my career, I have embraced opportunities that allowed me to grow, starting as a Junior Developer and IT Desk Support Intern. I then transitioned into a Web Programmer role, where I contributed to various projects aimed at enhancing user experiences and optimizing backend processes.',
    'I thrive in challenging situations, viewing them as opportunities for growth. Continuous learning is a core value of mine, and I am always eager to explore new technologies and methodologies. I invite you to explore my portfolio to see the work I’ve done!',
    'Over the past three years, I have honed my skills in both frontend and backend development, creating dynamic user interfaces with technologies such as HTML, CSS, Tailwind, JavaScript, PHP, and TypeScript.',
    'I specialize in frameworks like React, React Native, Kohanna, and Next.js, focusing on innovative designs that elevate user experiences. My backend expertise encompasses Laravel, Node.js, and Express.js, and I have strong database management skills using MySQL, MongoDB, and MariaDB.',
    'Additionally, I have developed a solid understanding of DevOps practices, including Docker containerization and CI/CD processes, which have greatly streamlined my development workflows.',
    'Collaboration is something I truly value. I have had the privilege of guiding interns and facilitating team scrums, fostering a supportive environment where ideas can flourish. My commitment to continuous learning drives me to leverage my diverse skill set to impact meaningful projects and contribute to a dynamic development landscape.',
  ];

  return (
    <Stack
      style={{
        maxHeight: 'calc(100vh - 150px)',
        overflowY: 'auto',
      }}
    >
      <Container maxWidth="md" sx={{ padding: 4 }}>
        <Card elevation={2} sx={{ marginBottom: 4 }}>
          <CardContent>
            {combinedText.map((text, index) => (
              <Typography
                variant={index === 0 ? 'h4' : 'body1'}
                component={index === 0 ? 'h1' : 'p'}
                gutterBottom={index === 0}
                paragraph
                key={index}
                dangerouslySetInnerHTML={index === 4 ? { __html: text } : undefined}
              >
                {index !== 4 ? text : undefined}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Container>
    </Stack>
  );
};

export default AboutComponent;
