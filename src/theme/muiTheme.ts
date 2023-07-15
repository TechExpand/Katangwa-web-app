import { createTheme } from '@mui/material';

export default createTheme({
    palette: {
        background: {
            default: '#fff',
            paper: "#FFFFFF"
        },
        primary: {
            main: "#70A300",
            
        }
    },
    shape: {
        borderRadius: 12
    },
    components: {
    MuiButton: {
      styleOverrides: {
            root: ({ ownerState }) => ({
             textTransform: "capitalize",
          ...(ownerState.variant === 'contained' &&
                    ownerState.color === 'primary' && {
                   
            borderRadius: "8px",
                      fontWeight: "600",
              backgroundColor: "#70A300 !important",
              color: '#fff',
                    fontSize: "1rem",
              '&:hover': {
                backgroundColor: "#70A300 !important",
                  },
              
              }),
                ...(ownerState.variant === 'outlined' && {
                    backgroundColor: "transparent",
                    // borderColor: "#9DA5B2",
                    color: '#70A300',
              border: '3px solid #70A300',
                    fontSize: "1rem",
              '&:hover': {
                border: '3px solid #70A300',
                  },
              
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
                
                ...(ownerState.variant === 'outlined' && ownerState.color === 'inherit' && {
                    backgroundColor: "transparent",
                    borderColor: "#9DA5B2 !important",
                  color: '#4BBB8B',
              borderWidth: '1.5px',
              fontSize: "1rem",
              '&:hover': {
                borderColor: "#9DA5B2 !important",
                borderWidth: '1.5px',
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