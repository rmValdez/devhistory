import {
  Container,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

const ResumeComponent = () => {
  return (
    <Stack
      style={{
        maxHeight: 'calc(100vh - 150px)',
        overflowY: 'auto',
      }}
    >
      <Container maxWidth="md">
        <Card elevation={3} sx={{ padding: 3, marginTop: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Educational Attainment
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Bachelor of Science in Information Technology (Major in Website Development)"
                  secondary="University of the Cordilleras, Gov. Pack Rd., Baguio City - Graduated April 2020"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Bachelor of Science in Electrical Engineering"
                  secondary="Saint Louis University, Bonifacio Street, Baguio City - 2014 - 2016"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Primary & Secondary Education"
                  secondary="Saint Joseph Institute, Candon City, Ilocos Sur - 2002 - 2013"
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Card elevation={3} sx={{ padding: 3, marginTop: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Work Experience
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Junior Developer & IT Desk Support (Intern)"
                  secondary="Benguet Provincial Capitol, La Trinidad, Benguet - September 2019 - January 2020"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Cook"
                  secondary="Recess Resto Bar, Session Road, Baguio City - March 2020 - February 2021"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Office Clerk & Layout Artist"
                  secondary="Rianella Printing, Campo Filipino, Baguio City - April 2021 - July 2021"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Web Programmer"
                  secondary="NMS Ph, PEZA Ecozone, Loakan Rd., Baguio City - August 2021 - September 2024"
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Card elevation={3} sx={{ padding: 3, marginTop: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Skills and Qualifications
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Proficient in: Putty, Docker, Git, Material UI, Next.js, ReactJS, Formik, MySQL, Kohanna, ShadCN, Tailwind, CSS, HTML, Laravel framework" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Languages: JavaScript, PHP, TypeScript" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Familiar with Microsoft Office, Google Documents, Email platforms, and various Code Editors" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Experienced with development methodologies such as TDD, Agile, Kanban, and Extreme Programming" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Adaptable to high-pressure situations and committed to continuous learning" />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Card elevation={3} sx={{ padding: 3, marginTop: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Project Experience
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Handled both internal and external projects" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Internal: Contributed to company process improvements (accounting, attendance tracking, user management systems)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="External: Developed applications for employee compensation, live site applications, recruitment platforms, user management, and exam systems" />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Card elevation={3} sx={{ padding: 3, marginTop: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Personal Information
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Hometown: Parioc 2nd, Candon City, Ilocos Sur" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date of Birth: November 17, 1996" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Age: 27 years old" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Height: 5'3" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Weight: 65 kg" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Container>
    </Stack>
  );
};

export default ResumeComponent;
