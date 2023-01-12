import React,{useState,useEffect} from 'react'
import {AppBar, Toolbar,Typography,makeStyles,InputBase,styled,alpha,CircularProgress,Box} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({
    root : {
        cursor : 'pointer',
        background : '#fff',
        color : '#4A4A4A',
    },
    toolbar : {
        justifyContent : 'center',
        textTransform : 'uppercase',
        '& > *' : {
            padding : 20,
            
        },   
    },
    search :  {
        background: '#ffffff',
        width : '200px',
        height: '40px',
        border: 'none',
        outline: 'none',
        borderRadius:  '5px',
        boxShadow : '2px 2px 3px 3px #f1f0f0'
    },
    infoMsg :{ 
      width: '100%',
      position: 'absolute',
      left: '0px',
      bottom: '-30px',
      backgroundColor : '#00bcd4'
    }
   

});

const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));




  
const Navbar = ({handleSearch,searchPost}) => {
    const classes = useStyles();

    const [isOnChange ,setIsOnChange] = useState(false)
    const [targetValue ,setTargetValue] = useState('')

   
    useEffect(() => {
      setIsOnChange(false)
    }, [searchPost])
   

    return (
        <AppBar className={classes.root}>
          
            <Toolbar className={classes.toolbar}>
                   
                <NavLink to="/" className="nav-link">
                  <Typography>Home</Typography>
                </NavLink>
              
              <Typography>About</Typography>
              <Typography>Blogs</Typography>
              <Typography>Login</Typography>


              <Search>
                            <SearchIconWrapper>
                              {!isOnChange ?<SearchIcon /> : 
                              <CircularProgress 
                                style={{width:  "20px", height : "20px", color : '#74b9ff'}}
                                /> }
                                
                             </SearchIconWrapper>    
                            
                            
                                <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'Search..' }}
                                onChange={(e) => {
                                    handleSearch(e);
                                    setIsOnChange(true);
                                    setTargetValue(e.target.value)
                                  }}
                                />

                        {targetValue.length > 0 ? (
                           <Box className={classes.infoMsg}>
                           {searchPost.length === 0 ? (
                             <Typography variant="body2" align="center" color="secondary">
                               No records found
                             </Typography>
                           ): (
                             <Typography variant="body2" align="center" color="inherit">
                               Found {searchPost.lengt} posts..
                             </Typography>
                           )}
                           
                           
                           </Box>
                           ) : null}
                                
                          </Search>
                       
                        
                        
             

            </Toolbar>
        </AppBar>
    )

}

export default Navbar
