import React, { Component } from 'react'
import classes from './DropInVisit.module.css'
import ListCities from '../ListCities/ListCities'
import JoinUs from '../JoinUs/JoinUs'
import DogWalkerBack from '../DogWalkerBack/DogWalkerBack';
import NoKennelsList from '../NoKennelsList/NoKennelsList';
import TreatYourDog from '../TreatYourDog/TreatYourDog';
import HeaderDropInVisit from '../DropInVisitComponents/HeaderDropInVisit/HeaderDropInVisit'

class DropInVisit extends Component {
    render() {
        return (
            <div className={classes.DropInVisit}>
                <HeaderDropInVisit />
                <TreatYourDog />
                <NoKennelsList />
                <DogWalkerBack />
                <ListCities />
                <JoinUs />
            </div>
        )
    }
}

export default DropInVisit