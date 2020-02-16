import React, { Component } from 'react'
import classes from './Walking.module.css'
import ListCities from '../ListCities/ListCities'
import JoinUs from '../JoinUs/JoinUs'
import DogWalkerBack from '../DogWalkerBack/DogWalkerBack';
import NoKennelsList from '../NoKennelsList/NoKennelsList';
import TreatYourDog from '../TreatYourDog/TreatYourDog';
import HeaderWalking from '../WalkingComponents/HeaderWalking/HeaderWalking'

class Walking extends Component {
    render() {
        return (
            <div className={classes.Walking}>
                <HeaderWalking />
                <TreatYourDog />
                <NoKennelsList />
                <DogWalkerBack />
                <ListCities />
                <JoinUs />
            </div>
        )
    }
}

export default Walking