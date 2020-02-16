import React, { Component } from "react";
import classes from "./FooterList.module.css";

class FooterListClick extends Component {
  onClick = event => {};

  render() {
    return (
      <div className={classes.FooterList}>
        {this.props.list.map(item => (
          <h4 key={item.id}>{item.title}</h4>
        ))}

        <ul>
          {this.props.list.map(item => (
            <li key={item.id}>
              <div onClick={this.onClick.bind(this)} className={classes.a}>
                {item.content}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FooterListClick;
