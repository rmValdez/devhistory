import React, { useState } from 'react';
import { Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';

const MainSideBarNavigation = () => {
  const NAVIGATION = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ];

  const router = useRouter();
  const [selected, setSelected] = useState(router.pathname); 

  const handleSelect = (path: string) => {
    setSelected(path);
    router.push(path); 
  };

  return (
    <Card sx={{ width: '20%', height: '100%' }}>
      <CardContent sx={{ width: '100%', height: '100%' }}>
        <List>
          {NAVIGATION.map((navItem) => (
            <ListItem
              key={navItem.label}
              onClick={() => handleSelect(navItem.path)}
              sx={{
                marginBottom: '10px',
                backgroundColor: selected === navItem.path ? '#e0e0e0' : 'transparent', 
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  transition: 'background-color 0.3s',
                },
                borderRadius: '8px',
              }}
            >
              <ListItemText
                primary={navItem.label}
                sx={{
                  color: selected === navItem.path ? 'primary.main' : 'inherit',
                  fontWeight: selected === navItem.path ? 'bold' : 'normal',
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default MainSideBarNavigation;
