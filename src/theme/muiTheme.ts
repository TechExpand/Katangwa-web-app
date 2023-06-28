import { createTheme } from '@mui/material';

export default createTheme({
    palette: {
        background: {
            default: '#fff',
            paper: "#FFFFFF"
        },
        primary: {
            main: "#126969",
            
        }
    },
    shape: {
        borderRadius: 12
    },
    components: {
    MuiButton: {
      styleOverrides: {
            root: ({ ownerState }) => ({
            
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              background: "linear-gradient(42.75deg, #126969 -4.6%, #4BBB8B 107.63%) !important",
              color: '#fff',
              fontSize: "1rem",
              
              }),
                ...(ownerState.variant === 'outlined' && {
                    backgroundColor: "transparent",
                    borderColor: "#9DA5B2",
              color: '#000',
              fontSize: "1rem",
              
          }),
                ...(ownerState.variant === 'outlined' && ownerState.color === 'secondary' && {
                    backgroundColor: "transparent",
                    borderColor: "#126969 !important",
                  color: '#4BBB8B',
              borderWidth: '2px',
              fontSize: "1rem",
              '&:hover': {
                borderColor: "#126969 !important",
                borderWidth: '2px',
                  },
          }),
              
              fontWeight: '600',
               
        }),
      },
      },
     
      MuiInputBase: {
          styleOverrides: {
              input: {
                  padding: '.875rem !important',
              }
          }
      }
  
  },
})