import React, { Component } from 'react'
import classes from '../HeaderDoggyDay/HeaderDoggyDay.module.css'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import setSearchParam from '../../../store/actions/setSearchParam';
import FetchMarkers from '../../../store/actions/fetchMarkers';
import GetUid from '../../../store/actions/getUid';

class HeaderDoggyDayBase extends Component {
    onClick = () => {
        const { setSearchParam, FetchMarkers, GetUid } = this.props;
        setSearchParam({
            services: "Doggy Day Care",
            city: "",
            regularity: "One Time",
            startDate: "",
            endDate: "",
            dogSizes: [],
            daysOfTheWeek: [],
            salary: [10, 100]
        })
        FetchMarkers({})
        GetUid([])
        this.props.history.push("/search")
    }

    render() {
        return (
            <div className={classes.HeaderDoggyDay}>
            <div className={classes.content}>
                <h1>Doggy day care that fits your dog's <br /> needs, your schedule, and your <br /> lifestyle</h1>
                <h4>Welcome to the nation's largest network of pet sitters</h4>

                <div><span onClick={this.onClick} className={classes.headerButton}>Book Doggy Day Care</span></div>
            </div>
        </div>
        );
    }
}

const HeaderDoggyDay = compose(
    withRouter,
    connect(null, { setSearchParam, FetchMarkers, GetUid })
)(HeaderDoggyDayBase)

export default HeaderDoggyDay