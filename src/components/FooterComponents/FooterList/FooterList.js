import React from 'react'
import classes from './FooterList.module.css'
import { Link } from 'react-router-dom';

const FooterList = (props) => (
  <div className={classes.FooterList}>

      {props.list.map(item => (
        <h4 key={item.id}>
          {item.title}
        </h4>
      ))}

    <ul>
      {props.list.map(item => (
        <li key={item.id}>
          <div><Link to={`${item.link}`}>{item.content}</Link></div>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterList;