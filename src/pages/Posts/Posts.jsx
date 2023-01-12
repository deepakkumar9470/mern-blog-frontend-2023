import React,{useState,useEffect} from 'react'
import Post from '../Post/Post'
import {Grid} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import {getAllPosts} from '../../services/api'
import {useLocation} from 'react-router-dom'

const Posts = ({searchPost}) => {
    const {search} =  useLocation();
    const [posts,setPosts] = useState([])

    const fetchAllPosts = async () =>{
        try {
             
            const res = await getAllPosts(search)
            setPosts(res.data)

        } catch (error) {
              console.log(error)
        }
     }

    useEffect(() => {
         searchPost.length === 0 ? fetchAllPosts() : setPosts(searchPost)

    }, [searchPost])
    

    return (
        
        posts.map((post) => (
             <Grid item lg={3} sm={4} xs={12}>
                 <NavLink to={`/detail/${post._id}`} className="nav-link">
                      <Post post = {post}/>
                 </NavLink>
                
                
            </Grid>
            ))
        
        
    )
}

export default Posts
