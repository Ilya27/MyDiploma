import React, { Component } from 'react'
import classes from './DoggyDay.module.css'
import ListCities from '../ListCities/ListCities'
import JoinUs from '../JoinUs/JoinUs'
import DogWalkerBack from '../DogWalkerBack/DogWalkerBack';
import NoKennelsList from '../NoKennelsList/NoKennelsList';
import TreatYourDog from '../TreatYourDog/TreatYourDog';
import HeaderDoggyDay from '../DoggyDayComponents/HeaderDoggyDay/HeaderDoggyDay'

class DoggyDay extends Component {
    render() {
        return (
            <div className={classes.DoggyDay}>
                <HeaderDoggyDay />
                <TreatYourDog />
                <NoKennelsList />
                <DogWalkerBack />
                <ListCities />
                <JoinUs />
            </div>
        )
    }
}

export default DoggyDay