import React from 'react'
import Banner from '../../components/Banner/Banner'
import {Grid} from '@material-ui/core'
import Categories from '../Categories/Categories'
import Posts from '../Posts/Posts'
import Footer from '../../components/Footer/Footer'

const Home = ({searchPost}) => {
    return (
        <>
            <Banner/>
             <Grid container>
                 <Grid item lg={2} xs={2} sm={2}> 
                   <Categories/>
                   
                 </Grid>

                 <Grid container item lg={10} xs={12} sm={10} >
                   <Posts searchPost= {searchPost}/>
                 </Grid>

                 <Grid container item lg={12} xs={12} sm={4} >
                   <Footer/>
                 </Grid>
             </Grid>
            
        </>
    )
}

export default Home
