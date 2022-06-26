
import React from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core'
import Header from './components/Header'
import PlaceToVisits from './components/PlaceToVisits'
const useStyles =  makeStyles(theme => ({
  root:{
    minHeight:'100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}))
  
export default function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
        <CssBaseline/>
        <Header/>
        <PlaceToVisits/>
    </div>
  )
}
