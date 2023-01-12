import React,{useState,useEffect} from 'react'
import {makeStyles,Button,Box,FormControl, InputBase,TextareaAutosize} from '@material-ui/core'
import {useParams,useHistory } from 'react-router-dom'
import {AddCircleOutlineOutlined} from '@material-ui/icons'
import {getPost,updatePost,uploadFile} from '../../services/api'

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
        borderRadius : 5,
        cursor : 'pointer'
    },
    form : {
        display : 'flex',
        flexDirection : 'row',
        marginTop :10
    },
    inputField : {
          flex: 1,
          margin : '0 30px',
          fontSize : 20
    },
    textarea:{
         width : '100%',
         marginTop : 40,
         border : 'none',
         color: '#636e72',
         fontSize :18,
         '&:focus-visible' : {outline :  'none'}
    }

}));

const EditView = () => {
    const classes = useStyles();
    const {id}  = useParams()
    const history  = useHistory()
    const [post,setPost] = useState({})
    
    const [file,setFile] =  useState('')
    const [image,setImage] =  useState('')
    
    const url = post.pic ? post.pic : 'https://images.unsplash.com/photo-1527691590375-3b853c2e7b09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyfHxvdXRkb29yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

    useEffect(() =>{
        const getImage = async () =>{
             if(file){
                 const data = new FormData()
                 data.append('filename', file.name)
                 data.append('file', file)

                 const image = await uploadFile(data);
                 post.pic = image.data
                 setImage(image.data)
             }
        };
        getImage()
    },[file]);


   
   
    useEffect(() => {
         const fectchPost = async () =>{
            try {
                 
                const res = await getPost(id)
                setPost(res.data)

            } catch (error) {
                  console.log(error)
            }
         }
         fectchPost()

    }, [])



    const updatePostData = async () =>{
          
               await updatePost(id , post);
               history.push(`/detail/${id}`)      
    };

    const onValueChange = (e) =>{
        setPost({...post, [e.target.name] : e.target.value})
    }

    return (
        <Box className={classes.root}>
             <img  className={classes.image} src={url} alt="editpic" />

             <FormControl className={classes.form}>
             <label htmlFor="inputFile">
                <AddCircleOutlineOutlined 
                  className={classes.icon} 
                  fontSize='large'
                   color='action' />
                </label>
                 <input type="file" id="inputFile" style={{display : 'none'}} 
                 onChange={(e)=> setFile(e.target.files[0])}/>
               <InputBase 
                 value={post.title}
                 name="title"
                 onChange={(e)=> onValueChange(e)}
                 className={classes.inputField} 
                 placeholder = 'Title...'/>

               <Button 
                  onClick={() => updatePostData()}
                  variant='contained' 
                  color='primary'>Update</Button>
             </FormControl>

             <TextareaAutosize
             value={post.desc}
             name="desc"
             onChange={(e)=> onValueChange(e)}
             rowsMin ={5}
             placeholder= 'Tell your story here ....'
             className={classes.textarea}/>

             
             
        </Box>
    )
}

export default EditView
