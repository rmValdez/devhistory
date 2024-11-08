import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Stack,
} from '@mui/material';

const PortfolioComponent = () => {
  const workExperience = [
    {
      title: 'Web Programmer',
      company: 'NMS Ph',
      duration: 'August 2021 - September 2024',
      description:
        'Developed and maintained various applications, improving user experience and functionality.',
    },
    {
      title: 'Junior Developer & IT Desk Support (Intern)',
      company: 'Benguet Provincial Capitol',
      duration: 'September 2019 - January 2020',
      description:
        'Assisted in IT support tasks and collaborated with the development team on web projects.',
    },
    {
      title: 'Cook',
      company: 'Recess Resto Bar',
      duration: 'March 2020 - February 2021',
      description: 'Managed kitchen tasks and ensured food quality and safety.',
    },
    {
      title: 'Office Clerk & Layout Artist',
      company: 'Rianella Printing',
      duration: 'April 2021 - July 2021',
      description:
        'Handled clerical tasks and assisted in designing layouts for printing projects.',
    },
  ];

  const projects = [
    {
      title: 'NMS APPS (HR v1 "Stale")',
      description:
        'User Management platform handling user data, notifications, and upserting user data.',
    },
    {
      title: 'NMS APPS (Exams)',
      description:
        'Exam application used for submitting personal details and answering questions for job seekers.',
    },
    {
      title: 'FLAI',
      description: 'Calculating and generating payroll for freelancers.',
    },
    {
      title: 'NMS APPS (AMS)',
      description:
        'Company Inventory system for managing inventory and assets.',
    },
    {
      title: 'Moderation',
      description: 'Moderating client requests and managing service tasks.',
    },
    {
      title: 'Premium Site V1 / V2',
      description:
        'Subscription external applications, focusing on user queries.',
    },
    {
      title: 'NMS APPS (Accounts V2)',
      description:
        'OAuth handling with third-party connections for account management.',
    },
    {
      title: 'NMS APPS (Core V2)',
      description:
        'Internal company procedures, including configuration and API connections.',
    },
    {
      title: 'NMS APPS (Recruitment)',
      description:
        'Recruitment platform for managing employee recruitment processes.',
    },
  ];

  const skills = [
    'Frontend: HTML, CSS, Tailwind, JavaScript, PHP, TypeScript',
    'Frameworks: React, React Native, Next.js, Kohanna',
    'Backend: Node.js, Express.js, Laravel',
    'Database: MySQL, MongoDB, MariaDB',
    'DevOps: Docker, CI/CD',
  ];

  const accomplishments = [
    'Configured systems for multiple applications.',
    'Designed and implemented a flexible frontend solution for creating multiple form templates.',
    'Mentored new hires and interns.',
    'Implemented backend recursive queries for enhanced performance.',
  ];

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
            <Typography variant="h6" component="h2" gutterBottom>
              Work Experience
            </Typography>
            <List>
              {workExperience.map((item, index) => (
                <ListItem key={index} sx={{ overflowWrap: 'break-word' }}>
                  <ListItemText
                    primary={<strong>{item.title}</strong>}
                    secondary={
                      <>
                        <Typography variant="body2" sx={{ display: 'inline' }}>
                          {item.company}, {item.duration}
                        </Typography>
                        <br />
                        <Typography
                          variant="body2"
                          sx={{ overflowWrap: 'break-word' }}
                        >
                          {item.description}
                        </Typography>
                      </>
                    }
                    sx={{ overflowWrap: 'break-word' }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card elevation={2} sx={{ marginBottom: 4, overflowY: 'auto' }}>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              Projects
            </Typography>
            <List>
              {projects.map((item, index) => (
                <ListItem key={index} sx={{ overflowWrap: 'break-word' }}>
                  <ListItemText
                    primary={<strong>{item.title}</strong>}
                    secondary={
                      <Typography
                        variant="body2"
                        sx={{ overflowWrap: 'break-word' }}
                      >
                        {item.description}
                      </Typography>
                    }
                    sx={{ overflowWrap: 'break-word' }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card elevation={2} sx={{ marginBottom: 4 }}>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              Skills
            </Typography>
            <List>
              {skills.map((skill, index) => (
                <ListItem key={index} sx={{ overflowWrap: 'break-word' }}>
                  <ListItemText primary={skill} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Accomplishments Section */}
        <Card elevation={2}>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              Accomplishments
            </Typography>
            <List>
              {accomplishments.map((accomplishment, index) => (
                <ListItem key={index} sx={{ overflowWrap: 'break-word' }}>
                  <ListItemText primary={accomplishment} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Container>
    </Stack>
  );
};

export default PortfolioComponent;
