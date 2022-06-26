import React from 'react'
import { makeStyles } from '@material-ui/core'
import ImageCard from './ImageCard'
import {places} from '../places'

const useStyles = makeStyles(theme => ({
    cardContainer: {
        display:"flex",
        justifyContent:"center",
        alignContent: "center",
    }
}))

export default function PlaceToVisits() {
 const classes = useStyles()
  return (
    <div className={classes.cardContainer} id="place-to-visit">
        <ImageCard place={places[0]}/>
        <ImageCard place={places[1]}/>
    </div>
  )
}
