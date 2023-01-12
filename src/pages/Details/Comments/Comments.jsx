import React,{useState, useEffect} from 'react'
import {makeStyles,Box,Button,TextareaAutosize} from '@material-ui/core'

import {createComment,getAllComments} from '../../../services/api'
import Comment from './Comment'

const useStyles = makeStyles((theme)=>({
    root : {
        height : '25vh',
        marginTop : 100,
        marginLeft : 50,
        display : 'flex',
        
       
     },
    image: {
        width : '50px',
        height:  '50px',
        objectFit : 'cover',
        borderRadius : 10,
        
     },
    textarea:{
         width : '100%',
         margin : '0 20px',
    },
    button : {
        height : 40
    }

}));

const initialValues  = {
    name : '',
    postId : '', 
    comments : '' , 
    date : Date.now() , 
}


const Comments = ({post}) => {
    const classes = useStyles();
    const [comment,setComment]  = useState(initialValues)
    const [comments,setComments]  = useState([])
    const [toggle,setToggle]  = useState(false)
    
     
   useEffect(() => {
        const getCommentsData = async () =>{
            try {
                const res = await getAllComments()
                setComments(res.data)
            } catch (error) {
                
            }
        }
        getCommentsData()
   }, [post,toggle])

   const onValueChange = (e) =>{
        setComment({
              ...comment,
              name : post.username, 
              postId : post._id, 
              comments : e.target.value })
    }; 

    const postComment = async () =>{
          try {
             await createComment(comment)
             setToggle(prev => !prev)
          } catch (error) {
             console.log(error)   
          }
    };

    return (
        <Box>
       
            <Box className={classes.root}>
                  <img className={classes.image} src='../images/user.png' alt="dp"/>
                  <TextareaAutosize
                  rowsMin ={3}
                  onChange = {(e) => onValueChange(e)}
                  placeholder= 'Tell your story here ....'
                  className={classes.textarea}
                  />

                  <Button 
                  className={classes.button}
                    variant="contained" 
                    onClick={() => postComment()}
                    color="primary">
                        Post
                  </Button>
            </Box>
              {
                  comments && comments.map((cmnts) =>(
                      <Comment comment={cmnts} setToggle={setToggle}/>
                  ))
              }

        </Box>
    )
}

export default Comments
