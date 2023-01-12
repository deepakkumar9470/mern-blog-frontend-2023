import React,{useState, useEffect} from 'react'
import {makeStyles,Button,Box,FormControl,InputBase,TextareaAutosize} from '@material-ui/core'
import {AddCircleOutlineOutlined} from '@material-ui/icons'
import {createPost,uploadFile} from '../../services/api'
import {useHistory} from 'react-router-dom'


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

const initialValues  = {
    title : '',
    desc : '', 
    pic : '' , 
    username : 'dk397787' , 
    categories : 'All', 
    createdDate: Date.now()
};

const CreateView = () => {
    const history = useHistory()
    const [post,setPost]  = useState(initialValues)
    const classes = useStyles();
    
    const [file,setFile] =  useState('')
    const [image,setImage] =  useState('')
    
    const url = post.pic ? post.pic : 'https://images.unsplash.com/photo-1527691590375-3b853c2e7b09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyfHxvdXRkb29yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
 
    useEffect(() =>{
        const getImage = async () =>{
             if(file){
                 const data = new FormData();
                 data.append('filename', file.name);
                 data.append('file', file);

                 const image = await uploadFile(data);
                 post.pic = image.data
                 setImage(image.data);
             }
        };
        getImage()
    },[file]);

    const savePost = async () =>{
         
         try {
            await createPost(post);
            history.push('/')
             
         } catch (error) {
            console.log(error)
         }

    }
      
    const onValueChange = (e) =>{
        setPost({...post, [e.target.name] : e.target.value})
    }
   


    return (
        <Box className={classes.root}>

            <img className={classes.image} src={url} alt="editpic"/>

            <FormControl className={classes.form}>
                <label htmlFor="inputFile">
                <AddCircleOutlineOutlined 
                  className={classes.icon} 
                  fontSize='large'
                   color='action'/>
                </label>
                 <input type="file" id="inputFile" style={{display:'none'}} 
                 onChange={(e)=> setFile(e.target.files[0])}/>

                <InputBase className={classes.inputField}
                    placeholder='Title...'
                    name='title'
                    onChange={(e) => onValueChange(e)}
                />
                
                 <Button variant='contained' color='primary'
                     onClick={() => savePost()}>Publish</Button>

            </FormControl>

            <TextareaAutosize
                rowsMin={5}
                name='desc'
                onChange={(e) => onValueChange(e)}
                placeholder='Tell your story here....'
                className={classes.textarea} />

        </Box>
    )
}

export default CreateView
