import React,{useState} from 'react'
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import {Box} from '@material-ui/core'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import DetailsView from './pages/Details/DetailsView';
import EditView from './pages/Edit/EditView'
import CreateView from './pages/Create/CreateView';
import {searchPost as searchPostApi} from './services/api'

function App() {

  const [searchPost, setSearchPost] = useState([])

  const handleSearch =  (e) =>{
    searchPostApi({data : e.target.value}).then(({data : posts}) => {
      setSearchPost(posts)
    console.log('search', posts)
  })
  
};
  return (
    <Router>
       <Navbar handleSearch={handleSearch} searchPost={searchPost}/>
        <Box style={{marginTop :  64}}>
          <Switch>
            <Route exact path="/"> <Home searchPost={searchPost}/> </Route>
            <Route exact path="/create"> <CreateView/> </Route>
            <Route exact path="/detail/:id"> <DetailsView/> </Route>
            <Route exact path="/edit/:id"> <EditView/> </Route>
          </Switch>
          
        </Box>
       
    </Router>
  );
}

export default App;
