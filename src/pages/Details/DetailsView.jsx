import React,{useState,useEffect} from 'react'
import {makeStyles,Box,Typography} from '@material-ui/core'
import { NavLink,useParams,useHistory } from 'react-router-dom'
import {Edit,Delete,KeyboardBackspace} from '@material-ui/icons'
import {getPost,deletePost} from '../../services/api'
import Comments from './Comments/Comments'

const useStyles = makeStyles((theme)=>({
    root : {
        padding : '0 100px',
        [theme.breakpoints.down('md')] : {
            padding : 0,
            borderRadius : 0
        }
    },
    image: {
        width : '100%',
        height:  '60vh',
        objectFit : 'cover',
        borderRadius : 10,
        marginTop : 10
    },
    icons: {
        float : 'right'
    },
    icon:  {
        margin : 5,
        padding : 5,
        borderRadius : 5,
        fontSize :30,
        border : '1px solid #DFDFDF',
        cursor : 'pointer'
    },
    heading:  {
        fontSize : 25,
        fontWeight : 600,
        textAlign : 'center',
        margin : '50px 0 5px 0',
        color : '#636e72'
    },
    subheading : {
        color : '#b2bec3',
        margin : '20px 0',
        display : 'flex',
        justifyContent : 'space-around',
        [theme.breakpoints.down('sm')] : {
            display : 'block',
            padding: 10
            
        }
    },desc: {
        color : '#535c68',
        fontSize : 20,
        marginBottom : 10,
        textAlign : 'center'
    }

}));

const DetailsView = () => {
    const {id} =  useParams();
    const classes = useStyles();
    const history = useHistory();
    const [post,setPost] = useState([])
    const url = post.pic ? post.pic :'https://images.unsplash.com/photo-1525772972514-aaadd39ad936?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fG91dGRvb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

    useEffect(() => {
         const fetchPost = async () =>{
            try {
                 
                const res = await getPost(id)
                setPost(res.data)

            } catch (error) {
                  console.log(error)
            }
         }
         fetchPost()

    }, [])

    const deletePostData = async () =>{
         try {
             
              await deletePost(post._id)
              history.push('/')
         } catch (error) {
             console.log(error)
         }
    }
    return (
        <Box className={classes.root}>
            <NavLink to="/">
                <KeyboardBackspace color="inherit" style={{fontSize : '25px',marginTop : '10px'}}/>
            </NavLink>
             <img  className={classes.image} src={url} alt="mainpic" />
             <Box className={classes.icons}>
               <NavLink to={`/edit/${post._id}`}>
                 <Edit className={classes.icon} color='primary'/>
               </NavLink>  
               
                <Delete onClick={() => deletePostData()} className={classes.icon} color= 'error'/>
             </Box>
           
            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.subheading}>
                <NavLink to={`/?username=${post.username}`} className="nav-link">
                  <Typography>Author : <span style={{fontWeight  : 600}}>{post.username}</span></Typography>  
                </NavLink>
               
                <Typography>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>
            <Typography className={classes.desc}>{post.desc}</Typography>

             <Comments post={post}/>

        </Box>
    )
}

export default DetailsView
