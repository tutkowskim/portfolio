import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import sections from './sections';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => setShowDrawer(!showDrawer);
  const scrollToSection = (section) => {
    const sectionAnchor = document.getElementById(section.name);
    if (sectionAnchor) sectionAnchor.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mark Tutkowski
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {sections.map((section) => (
              <Button
                key={section.name}
                color="inherit"
                sx={{ textTransform: 'none' }}
                onClick={() => scrollToSection(section)}
              >
                {section.name}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={showDrawer}
        onClose={toggleDrawer}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        <List>
          {sections.map((section) => (
            <ListItem key={section.name} sx={{ minWidth: 240 }}>
              <ListItemButton
                sx={{ textAlign: 'center' }}
                onClick={() => {
                  scrollToSection(section);
                  setShowDrawer(false);
                }}
              >
                <ListItemText primary={section.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {sections.map((section) => (
        <div key={section.name} id={section.name}>
          {section.component}
        </div>
      ))}
    </>
  );
}

export default App;
