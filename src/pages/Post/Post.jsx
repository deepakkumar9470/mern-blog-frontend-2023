
import React from 'react';
import { makeStyles ,Card,Box,CardActionArea,CardMedia,Typography,CardContent } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container : {
         margin : 15,
         height : 280,
         display : 'flex',
         flexDirection: 'column',
         alignItems : 'center',
         borderRadius : 5,
         '& > *'  : {
             padding : '0 0 5px 0' 
         }
  },
     image :{ 
        borderRadius : '5px 5px 0 0',
        height : 150,
        width : '100%',
        objectFit : 'cover',
        
    },
  text : {
    fontSize : 12,
    color : '#9B9B9B',
    cursor : 'pointer',
},
heading : {
     fontSize : 18 ,
     fontWeight : 600 ,
     cursor : 'pointer',
     
},
detail : {
       fontSize : 14,
       wordBreak : 'break-word',
       cursor : 'pointer',
       padding : 5
}
});

const Post = ({post}) => {
  const classes = useStyles();
  const url = post.pic || 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  
      const addEllipsis = (str,limit) =>{
        return str.length > limit ? str.substring(0, limit) + '...' : str;
       };
  return (
    <Box className={classes.container}>
      <Card className={classes.root}>

      <CardActionArea>
        <CardMedia
          className={classes.image}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={url}
          title="Blog App"
        />
        <CardContent>

             {/* <img className={classes.image} src={url} alt="postsimg" /> */}
             <Typography className={classes.text}>{post.categories}</Typography>
             <Typography className={classes.heading}>{addEllipsis(post.title,20)}</Typography>
             <Typography className={classes.text}>{post.username}</Typography>
             <Typography className={classes.detail}>{addEllipsis(post.desc,100)}</Typography>
        </CardContent>

      </CardActionArea>
      </Card>
      
    </Box>
  );
}

export default  Post;