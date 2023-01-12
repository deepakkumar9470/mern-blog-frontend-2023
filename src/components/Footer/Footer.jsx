import React from 'react'
import {Box, Grid,Container,Link,AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core'



const useStyles = makeStyles({
    text : {
       textAlign: 'center',
       marginLeft:300
    }
   

});
export default function Footer() {
    const classes = useStyles();
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar className={classes.text}>
              <Typography variant="body1" color="inherit">
                © 2021 Deepak Tv || All right rserved
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}