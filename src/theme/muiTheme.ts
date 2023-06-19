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
              fontWeight: '600',
               
        }),
      },
    },
  },
})