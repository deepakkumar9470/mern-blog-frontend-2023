import React from 'react'
import { Button, makeStyles, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core'
import {cats} from '../../data'
import {NavLink} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        margin : 25,
        background : '#9b59b6',
        color : '#fff',
        width : '80%'
      },
      tb:  {
          
          border : '1px solid rgba(224,224,224,1)'
      },
      table :{
        textAlign :'center',
        display : 'flex', flexDirection : 'column',
        margin : 10
      }
}));

const Categories = () => {
    const classes = useStyles()

    return (
         <>
             <NavLink to="/create" className="nav-link">
                    <Button size="medium" variant="contained" 
                        className={classes.button}>Create</Button>
             </NavLink>

             <Table className={classes.tb}>
                     <TableHead>
                         <TableRow className={classes.table}>     
                             <TableCell>
                                <NavLink to="/" className="nav-link">
                                  All Categories
                                </NavLink>
                             </TableCell>
                         </TableRow>
                     </TableHead>
                 
                  <TableBody>
                      {
                          cats.map((cat) => (
                            <TableRow className={classes.table}>
                                    <TableCell>
                                        <NavLink className="nav-link" to={`?categorie=${cat}`}>
                                          {cat}
                                        </NavLink>
                                    </TableCell>
                             </TableRow>
                          ))
                      }
                   
                 </TableBody>
             </Table>
         </>
    )
}

export default Categories
