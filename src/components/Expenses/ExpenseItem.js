import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const [title, titlefun] = useState(props.title);
    const changeName = () => {
        titlefun("updated!!!!");
    }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={changeName}>click to change</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;