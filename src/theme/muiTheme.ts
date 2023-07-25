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
    MuiSlider: {
      styleOverrides: {
          thumb:{
      color: "white",
      border: "1px solid #9DA5B2",
          width: "2rem",
      height: "2rem",
      
      },

        track: {
        height: 2,
        color: "#828282"
        
        },
        root: {
        color: "#828282",
        height: 2,
        padding: "13px 0",
    },
        }
      },
    MuiButton: {
      styleOverrides: {
            root: ({ ownerState }) => ({
          textTransform: "capitalize",
              borderRadius: "8px",
                      fontWeight: "600",
          ...(ownerState.variant === 'contained' &&
                    ownerState.color === 'primary' && {
                   
            
              backgroundColor: "#70A300 !important",
            color: '#fff',
              padding: '10px',
                    fontSize: "1rem",
              '&:hover': {
                backgroundColor: "#70A300 !important",
                  },
              
              }),
                ...(ownerState.variant === 'outlined' && {
                    backgroundColor: "transparent",
                    // borderColor: "#9DA5B2",
                    color: '#70A300',
              border: '1px solid #70A300',
                    fontSize: "1rem",
              '&:hover': {
                border: '1.5px solid #70A300',
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