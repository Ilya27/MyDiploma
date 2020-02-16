import React, { Component } from 'react'
import classes from '../HeaderDropInVisit/HeaderDropInVisit.module.css'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import setSearchParam from '../../../store/actions/setSearchParam';
import FetchMarkers from '../../../store/actions/fetchMarkers';
import GetUid from '../../../store/actions/getUid';

class HeaderDropInVisitBase extends Component {
    onClick = () => {
        const { setSearchParam, FetchMarkers, GetUid } = this.props;
        setSearchParam({
            services: "Drop-In Visits",
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
            <div className={classes.HeaderDropInVisit}>
            <div className={classes.content}>
                <h1>Book drop-in visits in 10,000 cities,<br /> including yours</h1>
                <h4>Personalized care for your pet—without breaking the bank</h4>

                <div><span onClick={this.onClick} className={classes.headerButton}>Book A Visit</span></div>
            </div>
        </div>
        );
    }
}

const HeaderDropInVisit = compose(
    withRouter,
    connect(null, { setSearchParam, FetchMarkers, GetUid })
)(HeaderDropInVisitBase)

export default HeaderDropInVisit