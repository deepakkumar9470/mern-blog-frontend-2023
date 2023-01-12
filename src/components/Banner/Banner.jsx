import React from 'react'
import {Box,makeStyles,Typography} from '@material-ui/core'


const useStyles = makeStyles({
     bg:  {
         background : `url(${'./images/vlog2.jpg'}) center/100% repeat-y` , 
         width : '100%',
         height  : '60vh',
         objectFit: 'cover',
         display : 'flex',
         flexDirection: 'column',
         justifyContent : 'cenetr',
         alignItems : 'center',
         '& :first-child' : {
             marginTop : 70,
             fontFamily: 'Lobster, cursive',
             fontSize : 60,
             color : '#fff',
             lineHeight : 2
         },
         '& :last-child' : {
            fontSize : 20,
            background : '#2d3436',
            opacity : 0.7,
            fontFamily: 'Tangerine, cursive',
            padding : 10,
            color : '#fff',
            borderRadius : 5
        }
         
     },
});


const Banner = () => {
    const classes = useStyles();
    
    return (
        <Box className={classes.bg}>
           <Typography>MERN BLOG</Typography>
           <Typography>Capture your moment..</Typography>
          

        </Box>
    )
}

export default Banner
