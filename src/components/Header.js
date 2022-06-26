import { useState, useEffect } from 'react';
import { AppBar, Collapse, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import  SortIcon  from '@material-ui/icons/Sort'
import  ExpandMoreIcon  from '@material-ui/icons/ExpandMore'
import { Link as Scroll } from 'react-scroll'
import React from 'react';
const useStyles  = makeStyles(theme => ({
    root:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        textAlign:"center",
        fontFamily:'Nunito'
    },
    appbar:{
        background:"none",
    },
    appbarWrapper:{
        width: '80%', 
        margin: "0 auto",  
    },
    appbarTitle:{
        flexGrow:1,  
        textAlign:"left",
    },
    icon:{
        color:"#fff",
        fontSize:"3rem"
    },
    colorText:{
        color:"#5AFF3D",
    },
    container:{
        textAlign: "center",
    },
    title:{
        color:"#fff",
        fontSize:"4.5rem"
    },
    goDown:{
        textAlign:"center",
        fontSize:"4rem",
        color:"#5AFF3D",


    }
}))
export default function Header() {
const classes = useStyles();
const [checked, setChecked] = useState(false)

useEffect(() => {
   setChecked(true)
}, [])

  return (
      <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        My<span className={classes.colorText}>Island.</span>
                    </h1>
                    <IconButton>
                        <SortIcon  className={classes.icon}/>
                    </IconButton>
                </Toolbar>              
            </AppBar>
            <Collapse 
                in={checked}
                {...(checked ? {timeout: 1000} : {})}
                collapsedSize={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br/>
                        My <span className={classes.colorText}>Island</span>
                    </h1>
                <Scroll to="place-to-visit" smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown}/>
                    </IconButton>
                </Scroll>
                               
                </div>
            </Collapse>
           
      </div>
  )
}
