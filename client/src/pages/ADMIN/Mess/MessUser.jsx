import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const User = [
  { id: 1, username: 'Brunch', status: false, avatar: '/static/images/avatar/5.jpg' },
  { id: 2, username: 'Birthday', status: false, avatar: '/static/images/avatar/1.jpg' },
  { id: 3, username: 'Recipe', status: false, avatar: '/static/images/avatar/2.jpg' },
  { id: 4, username: 'Yes!', status: false, avatar: '/static/images/avatar/3.jpg' },
  { id: 5, username: 'Doctor', status: true, avatar: '/static/images/avatar/4.jpg' },
  { id: 6, username: 'Discussion', status: true, avatar: '/static/images/avatar/5.jpg' },
  { id: 7, username: 'Summer', status: false, avatar: '/static/images/avatar/1.jpg' },
];

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    width: 12,
    height: 12,
    borderRadius: '50%',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      content: '""',
    },
  },
}));

export default function MessUser({ onUserSelect }) {
  const [messages, setMessages] = React.useState(User);

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <List>
        {messages.map(({ id, username, status, avatar }) => (
          <ListItemButton key={id} onClick={() => onUserSelect(id)}>
            <ListItemAvatar>
              {status ? (
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt={username} src={avatar} />
                </StyledBadge>
              ) : (
                <Avatar alt={username} src={avatar} />
              )}
            </ListItemAvatar>
            <ListItemText primary={username} secondary={status ? 'Online' : ''} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
