import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// Styled button component
const BootstrapButton = styled(Button)(({ theme, margin }) => ({
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#ff7004',
  color: '#fff',
  borderColor: '#ff7004',
  fontFamily: '"Open Sans", sans-serif',
  marginRight: margin || '0px', // Add margin, with default value
  '&:hover': {
    backgroundColor: '#e64a19',
    borderColor: '#d84315',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#d84315',
    borderColor: '#bf360c',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(255,112,4,.5)',
  },
}));

// Main component that takes 'label', 'color', 'onClick', and 'margin' as props
export default function CustomizedButtons({ label, color, onClick, margin }) {
  return (
    <BootstrapButton
      variant="contained"
      color={color}
      onClick={onClick}
      disableRipple
      margin={margin}  // Passing margin prop to the styled component
    >
      {label}
    </BootstrapButton>
  );
}
