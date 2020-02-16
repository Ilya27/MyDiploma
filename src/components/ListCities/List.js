import React from 'react'
import { Link } from 'react-router-dom';

const List = (props) => (
    <ul>
      {props.list.map(item => (
        <li key={item.id}>
          <div><Link to="/">{item.content}</Link></div>
        </li>
      ))}
    </ul>
);

export default List;