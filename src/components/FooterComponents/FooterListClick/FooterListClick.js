import React, { Component } from 'react'
import classes from './FooterList.module.css'

import { connect } from 'react-redux';
import setSearchParam from '../../../store/actions/setSearchParam';

import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

class FooterListBase extends Component {
  onClick = (event) => {
    const { setSearchParam } = this.props;
    setSearchParam({
      services: "Dog Boarding",
      city: event.target.innerText,
      regularity: "One Time",
      startDate: "",
      endDate: "",
      dogSizes: [],
      daysOfTheWeek: [],
      salary: [10, 100]
    })
    this.props.history.push("/search")
  }
  
  render() {
    return (
      <div className={classes.FooterList}>
          {this.props.list.map(item => (
            <h4 key={item.id}>
              {item.title}
            </h4>
          ))}
  
        <ul>
          {this.props.list.map(item => (
            <li key={item.id}>
              <div onClick={this.onClick.bind(this)} className={classes.a}>{item.content}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
};

const FooterListClick = compose(
  withRouter,
  connect(null, { setSearchParam })
)(FooterListBase)

export default FooterListClick;