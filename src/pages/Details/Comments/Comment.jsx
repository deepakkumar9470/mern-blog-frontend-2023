import React from 'react'
import {makeStyles,Box,Typography} from '@material-ui/core'
import {Delete} from '@material-ui/icons'
import {deleteComment} from '../../../services/api'

const useStyles = makeStyles((theme)=>({
    root : {
        marginTop : 20,
        padding : 10,
        background : '#f9f9f9' 
     },
     container : {
         display : 'flex',
         marginBottom  : 5
     },
     name : {
           fontSize : 18,
           fontWeight : 600,
           marginRight : 20,
           color : '#2f3542'
     },
     date  :{
         fontSize : 14,
         color : '#878787'
     },
     delete :{ 
         marginLeft  : 'auto',
         cursor : 'pointer',
         color : '#ff4757'
     }

}));


const Comment = ({comment,setToggle}) => {
    const classes = useStyles();


    const removeComment = async () =>{
           try {
                await deleteComment(comment._id)
                setToggle(prev => !prev)
           } catch (error) {
             console.log(error)   
           }
      };

    return (
        <Box className={classes.root}>
       
            <Box className={classes.container}>
                <Typography className={classes.name}>{comment.name}</Typography>
                <Typography className={classes.date}>{new Date(comment.date).toDateString()}</Typography>
                <Delete className={classes.delete} onClick={() => removeComment()}/>
            </Box>
            <Typography>{comment.comments}</Typography>

    </Box>
    )
}

export default Comment
